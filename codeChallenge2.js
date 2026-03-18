/* SCENARIO */

/**
 * Write two functions, Image and getImage, that will return a new image object based on three given arguments: title, artist, and date.
 *
 * The Image function is the constructor, and getImage is the factory. Using the images data array from the previous task, create a new array, images1, using the Image          * constructor (don't copy the objects, but just create new ones based on the properties read).
 * 
 * Similarly, from images1 create a new array, images2, using getImage.
 * Display the contents of images2.
 */

//Función constructora para crear un nuevo objeto imagen
function Image(title, artist, creation_date) {
    this.title = title;
    this.artist = artist;
    this.creation_date = creation_date;
}

//Función de fábrica para crear un nuevo objeto imagen
function getImage(title, artist, creation_date) {
    return new Image(title, artist, creation_date);
}

//Array de objetos con la información de las pinturas
let images = [
  { title: "Mona Lisa", artist: "Leonardo da Vinci", creation_date: "1503" },
  { title: "The Last Supper", artist: "Leonardo da Vinci", creation_date: "1495" },
  { title: "Starry Night", artist: "Vincent van Gogh", creation_date: "1889" },
  { title: "The Scream", artist: "Edvard Munch", creation_date: "1893" },
  { title: "Guernica", artist: "Pablo Picasso", creation_date: "1937" },
  { title: "The Kiss", artist: "Gustav Klimt", creation_date: "1907" },
  { title: "Girl With a Pearl Earring", artist: "Johannes Vermeer", creation_date: "1665" },
  { title: "The Birth of Venus", artist: "Sandro Botticelli", creation_date: "1485" },
  { title: "Las Meninas", artist: "Diego Velázquez", creation_date: "1656" },
  { title: "The Creation of Adam", artist: "Michelangelo", creation_date: "1512" }
];

//Arrays vacios para almacenar los nuevos objetos imagen creados con las funciones constructor y fábrica
let images1 = [];
let images2 = [];

//Iterar el array de objetos para crear nuevos objetos imagen con la función constructora y almacenarlos en images1
images.forEach(img => 
    images1.push(new Image(img.title, img.artist, img.creation_date)));
//Luego se iteran images1 para crear nuevos objetos imagen con la función de fábrica y almacenarlos en images2
images1.forEach(img => 
    images2.push(getImage(img.title, img.artist, img.creation_date)));
//Finalmente se iteran images2 para mostrar la información completa de cada pintura en la consola
images2.forEach(img => 
    console.log(`Información completa - titulo: ${img.title}, artista: ${img.artist}, fecha de creación: ${img.creation_date}`));   