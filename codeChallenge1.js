/* SCENARIO */

//You have started to organize the paintings you keep at home, and have decided to make an inventory of some of the most important ones. Declare an array of objects that will correspond to the following images: Mona Lisa (Leonardo da Vinci, 1503), The Last Supper (Leonardo da Vinci, 1495), Starry Night (Vincent van Gogh, 1889), The Scream (Edvard Munch, 1893), Guernica (Pablo Picasso, 1937), The Kiss (Gustav Klimt, 1907), Girl With a Pearl Earring (Johannes Vermeer, 1665), The Birth of Venus (Sandro Botticelli, 1485), Las Meninas (Diego Velázquez, 1656), The Creation of Adam (Michelangelo, 1512).

//Display all the images in the list in the console (full information: title, artist and date of creation).
// ...existing code...

//Se define el array de objectos con la información de las pinturas
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

//Iteramos el array de objetos para mostrar la información completa de cada pintura en la consola
images.forEach(img => 
    console.log(`Información completa - titulo: ${img.title}, artista: ${img.artist}, fecha de creación: ${img.creation_date}`));
