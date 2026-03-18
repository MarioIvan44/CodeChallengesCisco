/* SCENARIO */

/**
 * Create an images object that will be used to store the images. The object should have a list property, which will be an array of image objects and methods:
 * contains - whichtakes as its argument the title of the image and returns true if the image is already placed in the list (otherwise it returns false)
 * add – which takes three arguments (title, artist, and date) and creates a new object based on them and adds it to the list (if it has not already been added)
 * show - which displays all images on the list;
 * clear – which removes all objects from the list.
 * While creating an object, use the Image constructor prepared in the earlier task.
Test the script by calling the sequence:
*/

// Función constructora para crear un nuevo objeto Image
// title: título de la imagen
// artist: nombre del autor
// creation_date: año o fecha de creación
function Image(title, artist, creation_date) {
    this.title = title;            
    this.artist = artist;         
    this.creation_date = creation_date;
}

// Objeto que gestiona una lista de imágenes y da metodos para manipularla
const images = {
    list: [], // arreglo que almacenará los objetos Image

    // contains(title): devuelve true si ya existe una imagen con ese título en la lista
    contains: function(title) {
        // some recorre la lista y verifica si algún elemento tiene el mismo título
        return this.list.some(image => image.title === title);
    },

    // add(title, artist, creation_date): crea una nueva Image y la agrega si no existe
    add: function(title, artist, creation_date) {
        // sólo agrega si contains retorna false (es decir, no existe aún)
        if (!this.contains(title)) {
            const image = new Image(title, artist, creation_date); // crea la instancia
            this.list.push(image); // añade la imagen al arreglo
        }
    },

    // show(): muestra por consola todas las imágenes de la lista
    show: function() {
        // forEach recorre cada imagen y hace un console.log con sus propiedades
        this.list.forEach(image => {
            console.log(`Información completa - titulo: ${image.title}, artista: ${image.artist}, fecha de creación: ${image.creation_date}`);
        });
    },

    // clear(): vacía la lista de imágenes
    clear: function() {
        this.list = []; // reasigna un arreglo vacío
    }
};

// Prueba del script con la secuencia 
console.log("Agregando a la Mona Lisa", images.add("Mona Lisa", "Leonardo da Vinci", "1503")); // Agrega la Mona Lisa
console.log("Agregando a la Starry Night", images.add("Starry Night", "Vincent van Gogh", "1889")); // Agrega la Starry Night
console.log("Verificando la Mona Lisa: ", images.contains("Mona Lisa")); // true, ya está en la lista
console.log("Verificando The Scream: ", images.contains("The Scream")); // false, no está en la lista
//Mostrar las imagenes
images.show()

//Limpiando la lista de imagenes
images.clear()

//Verificando si se limpió la lista
images.show()
console.log(images.list)