// All of your book objects are going to be stored in an array, 
// so you’ll need a constructor for books.
//  all of your book objects should have a unique id, which can be 
// generated using crypto.randomUUID()


const myLibrary = [];

function Book(title, author, pages, read) { // constructor
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.createBook = function() {
      console.log(this.title + ",", this.author + ",", this.id + ",", this.pages + ",", this.read)
      // return this.createBook(); creates too much in a endless loop
    };
  return this.createBook();
  
  }

  

  


// Then, add a separate function to the script (not inside the constructor) 
// that can take some arguments, create a book from those arguments, and store 
// the new book object into an array.

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array



const bookvar = new Book(title, author, pages, read); // reads it
console.log(bookvar);
//const newBook = new Book("Bad Title", "Bad Author Name", "Zero Pages", "Not Read")

//const create = bookvar.createBook(); // didn't work
//const create = newBook.createBook(); // still undefined
//console.log(create); // didn't work, cameback undefined

myLibrary.push(bookvar);

console.log(myLibrary);



  }

  addBookToLibrary();

  // i think this is right?