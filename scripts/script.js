// All of your book objects are going to be stored in an array, 
// so you’ll need a constructor for books.
//  all of your book objects should have a unique id, which can be 
// generated using crypto.randomUUID()


const myLibrary = [{title: "The Babysitters Club", author: "Unknown Author", pages: "233", read: "Not Read"}, {title: "Blues Brothers", author: "Unknown Author", pages: "1000", read: "Not Read"}, {title: "The Jungle Book", author: "Unknown Author", pages: "30", read: "Not Read"}];

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


  //Write a function that loops through the array and displays each 
  // book on the page. You can display them in some sort of table, or 
  // each on their own “card”. It might help for now to manually add 
  // a few books to your array so you can see the display.

  // consider the logic for displaying books to the user and the book
  // structures that hold all information as distinct entities. 

  function displayBook () {
   
   
    //const bookPlaceholder = document.querySelector(".bk-placeholder");
    const visibleBooks = document.querySelector("#visible-books");


    for (let i = 0; i < myLibrary.length; i++) { // loop works
       
        const bookPlaceholder = document.createElement("div");
        bookPlaceholder.classList.add(".bk-placeholder");

    bookPlaceholder.style.display = "flex";
    bookPlaceholder.style.flexDirection = "column";
   // bookPlaceholder.style.alignItems = "center";
   bookPlaceholder.style.justifyContent = "center";
    bookPlaceholder.style.borderLeftColor = "#FFAE03";
    bookPlaceholder.style.borderLeftWidth = "6px";
    bookPlaceholder.style.borderLeftStyle = "solid";
    bookPlaceholder.style.borderTop = "#2B303A solid 1px";
    bookPlaceholder.style.borderBottom = "#2B303A solid 1px";
    bookPlaceholder.style.borderRight = "#2B303A solid 1px";
    bookPlaceholder.style.borderRadius = "8px";
    bookPlaceholder.style.height = "250px";
    bookPlaceholder.style.width = "250px";
    bookPlaceholder.style.padding = "20px";


        const bookTxt = document.createElement("div");
        bookTxt.classList.add(".bk-txt");
        bookTxt.style.fontWeight = "bold";
       // bookPlaceholder = document.querySelector(".bk-placeholder");
        //const newBook = myLibrary[i];
        //console.log(newBook); // yes prints the first book which is Babbysitters Club
       // document.getElementsByClassName("bk-txt").innerHTML = `${newBook}`; //`${myLibrary[i]}` // doesn't work
       //const createNewBook = document.createElement("div")
       //createNewBook.insertBefore(".bk-placeholder", ".add-delete") = newBook;

       const bkTitle = document.createElement("p");
       bkTitle.classList.add("bk-title");
        bkTitle.textContent = "Title: " + myLibrary[i].title;
        bookTxt.appendChild(bkTitle);

        const bkAuth = document.createElement("p");
       bkAuth.classList.add("bk-author");
        bkAuth.textContent = "Author: " + myLibrary[i].author;
        bookTxt.appendChild(bkAuth);

        const bkPgs = document.createElement("p");
       bkPgs.classList.add("bk-pages");
        bkPgs.textContent = "Pages: " + myLibrary[i].pages;
        bookTxt.appendChild(bkPgs);

        const bkRead = document.createElement("p");
       bkRead.classList.add("bk-read");
        bkRead.textContent = "Read: " + myLibrary[i].read;
        bookTxt.appendChild(bkRead);


console.log(bookTxt);
       
        bookPlaceholder.appendChild(bookTxt);


        const addDeleteButtons = document.createElement("div");
        addDeleteButtons.classList.add(".add-delete");
        addDeleteButtons.style.display = "flex";
        addDeleteButtons.style.justifyContent = "flex-end";

        const addBkButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        addBkButton.setAttribute("id", "add-bk");

        addBkButton.setAttribute('viewBox', '0 0 24 24');

        addBkButton.setAttribute("style", "cursor:pointer;");
        addBkButton.setAttribute("height", "50px");
        addBkButton.setAttribute("width", "50px");
        


        const addBkButtonPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

        addBkButtonPath.setAttribute(
            "d", "M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z");

            addBkButton.appendChild(addBkButtonPath);

        addDeleteButtons.appendChild(addBkButton);

        const removeBkButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        removeBkButton.setAttribute("id", "remove-bk");
removeBkButton.setAttribute('viewBox', '0 0 24 24');
removeBkButton.setAttribute("style", "cursor:pointer;");
removeBkButton.setAttribute("height", "50px");
removeBkButton.setAttribute("width", "50px");

        const removeBkButtonPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

            removeBkButtonPath.setAttribute("d", "M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M15 18V20H23V18H15Z")


            removeBkButton.appendChild(removeBkButtonPath);

        addDeleteButtons.appendChild(removeBkButton);


       
        bookPlaceholder.appendChild(addDeleteButtons);
       visibleBooks.appendChild(bookPlaceholder);

        
    }

  }

  displayBook();