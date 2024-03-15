const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isAvailable: true
};
console.log("Title: " + book.title);
console.log("Author: " + book.author);
console.log("Year: " + book.year);
console.log("Available: " + book.isAvailable);
console.log("Title: " + book['title']);
console.log("Author: " + book['author']);
console.log("Year: " + book['year']);
console.log("Available: " + book['isAvailable']);
