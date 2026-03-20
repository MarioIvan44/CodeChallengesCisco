/* SCENARIO */

//Write a function, deepComp, that will compare two objects given as arguments (deep comparison). Compare only properties (ignore methods), and consider the possibility of nesting (any number of levels).

//Properties can also be objects and arrays. We are interested in the properties available during the usual enumeration.

function deepComp(obj1, obj2) {
    // Si son estrictamente iguales (mismo valor o misma referencia), son equivalentes.
    if (obj1 === obj2) {
        return true;
    }

    // Si alguno no es objeto (número, string, boolean, null, undefined),
    // y no fueron iguales en la condición anterior, entonces son diferentes.
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    let retVal = Object.keys(obj1).length === Object.keys(obj2).length;
    if (!retVal) {
        return false;
    }
    
    // Recorrer las claves del primer objeto
    for (let key of Object.keys(obj1)) {
        // Verificar si la clave no existe en el segundo objeto
        if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
            return false;
        }

        // Obtener los valores de ambas claves
        const val1 = obj1[key];
        const val2 = obj2[key];
        // Verificar si ambos valores son objetos (y no null)
        if (typeof val1 === 'object' && val1 !== null && typeof val2 === 'object' && val2 !== null) {
            // Llamada para comparar los objetos anidados
            if (!deepComp(val1, val2)) {
                return false;
            }
        } else if (val1 !== val2) { // Comparar valores primitivos
            return false;
        }
    }
    return true; // Si todas las claves y valores coinciden, los objetos son iguales
}

// Ejemplo de uso:
const objA = {
    name: "Mario",
    age: 18,
    address: "San Salvador"
};
const objB = {
    name: "Mario",
    age: 18,
    address: "San Salvador"
};

console.log("Comparando objeto A y B: " + deepComp(objA, objB)); // Devuelve true, ya que los objetos son iguales

let numero = 5;
let numero2 = 90;

console.log("Comparando números: " + deepComp(numero, numero2)); // Devuelve false, ya que los números son diferentes
