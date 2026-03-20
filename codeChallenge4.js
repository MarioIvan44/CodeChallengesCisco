/*SCENARIO */

/**
 * Complement the images object from the previous task with two new methods (without rewriting the whole object):

    edit - which takes three arguments (title, artist, and date) and if it finds an image with the given title in the list, it changes its artist and date properties;

    delete - which takes the title argument and if it finds a picture with this title in the list, it deletes it (to delete a list element, use the splice method)

    Additionally, add a show method to the Image constructor, which will display information about this one image. Do not rewrite the constructor. Use prototypes for this purpose. Then modify the show method of the images object so that it uses the newly created single image show method to display the information.
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

// Agregar el método show al prototipo de Image para mostrar la información de una imagen individual
Image.prototype.show = function () {
    console.log(`Información completa - titulo: ${this.title}, artista: ${this.artist}, fecha de creación: ${this.creation_date}`);
}

// Objeto que gestiona una lista de imágenes y da metodos para manipularla
const images = {
    list: [], // arreglo que almacenará los objetos Image
    // contains: devuelve true si ya existe una imagen con ese título en la lista
    contains: function (title) {
        return this.list.some(image => image.title === title);
    },
    // add: crea una nueva Image y la agrega si no existe
    add: function (title, artist, creation_date) {
        // sólo agrega si contains retorna false (es decir, no existe aún)
        if (!this.contains(title)) {
            const image = new Image(title, artist, creation_date);
            this.list.push(image);
        }
    },
    // edit: edita el artista y fecha de una imagen existente
    edit: function (title, artist, creation_date) {
        // Recorre la lista para encontrar la imagen por título y actualizar sus propiedades
        for (image of this.list) {
            // Si se encuentra la imagen con el título dado, actualiza su artista y fecha de creación
            if (image.title === title) {
                // Actualiza las propiedades del objeto imagen encontrado
                image.artist = artist;
                image.creation_date = creation_date;
                break;
            }
        }
    },
    // delete: elimina una imagen de la lista por título
    delete: function (title) {
        const index = this.list.findIndex(image => image.title === title); // encuentra el índice de la imagen por título
        if (index !== -1) { // si se encuentra la imagen, elimina el elemento del arreglo
            this.list.splice(index, 1);
        }
    },
    // show(): muestra por consola todas las imágenes de la lista usando el método show de cada imagen
    show: function () {
        // Recorre cada imagen en la lista y llama a su método show para mostrar su información
        for (image of this.list) {
            image.show();
        }
    }

};

// Prueba del script con la secuencia 
console.log("Agregando a la Mona Lisa", images.add("Mona Lisa", "Leonardo da Vinci", "1503")); // Agrega la Mona Lisa
console.log("Agregando a la Starry Night", images.add("Starry Night", "Vincent van Gogh", "1889")); // Agrega la Starry Night
//Mostrar las imagenes
console.log("Mostrando las imágenes después de agregar:");
images.show()

// Editar la información de la Mona Lisa
console.log("Editando la Mona Lisa", images.edit("Mona Lisa", "Pablo Picasso!", "1600")); // Edita la Mona Lisa
// Mostrar las imágenes después de la edición
console.log("Mostrando las imágenes después de editar la Mona Lisa:");
images.show()
// Eliminar la Starry Night
console.log("Eliminando la Starry Night", images.delete("Starry Night")); // Elimina la Starry Night
// Mostrar las imágenes después de la eliminación
console.log("Mostrando las imágenes después de eliminar la Starry Night:");
images.show()
