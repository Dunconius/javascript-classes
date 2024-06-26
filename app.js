
// import library class, book class, audio-book class, games class, movies class, music class
// if these classes have shared properties (name, year, genre, etc) make a base class and make each of these extend that class

const { Book } = require("./Book");
const { Media } = require("./Media");
const { Library } = require("./library");


// create instances of classes

let lotr = new Book("fellowship of the ring");
let lotr2 = new Book("the two towers");

console.log(lotr);
console.log(lotr.name);
console.log(lotr.edition);

// Do things with instances

// create an instance of  library
// Class = blueprint
// Instance = thing we make based on the blueprint
// Verb is 'instantiate'
// add media instances into the library instance

let libraryInstance = new Library;
libraryInstance.books.push(lotr);

// log data in the library

console.log(libraryInstance);

console.log(libraryInstance.books[0].name);

console.log("library length " +libraryInstance.books.length);
console.log("book count " + Book.count);

console.log("books about to be removed...");
lotr = null;
Book.removeBook();

console.log("book count " + Book.count);

console.log(libraryInstance.books[0].getBookName());