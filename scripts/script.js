// All of your book objects are going to be stored in an array, 
// so you’ll need a constructor for books.
//  all of your book objects should have a unique id, which can be 
// generated using crypto.randomUUID()

//let id = crypto.randomUUID();


//let bookID = "";

const myLibrary = [{title: "The Babysitters Club", author: "Unknown Author", pages: "233", read: "Not Read", id: `${crypto.randomUUID()}`}, {title: "Blues Brothers", author: "Unknown Author", pages: "1000", read: "Not Read", id: `${crypto.randomUUID()}`}, {title: "The Jungle Book", author: "Unknown Author", pages: "30", read: "Not Read", id: `${crypto.randomUUID()}`}];

function Book(title, author, pages, read) { // constructor
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
   // this.id = bookID;
   // this.createBook = function() {
   //   console.log(this.title + ",", this.author + ",", this.id + ",", this.pages + ",", this.read)
  //    // return this.createBook(); creates too much in a endless loop
  //  };
 // return this.createBook();
 
 // id = this.id;

 //return id;

  }
  
  
  // create book prototype
/*
  Book.prototype.bookID = function () {

    const bookCards = document.querySelectorAll("[data-id]");


  bookCards.forEach(bookCard => {
 
  });

  }
  */

  


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

 // addBookToLibrary(); // this was adding the undefined book

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
    visibleBooks.innerHTML = ""; // clear previous books
    
    

    for (let i = 0; i < myLibrary.length; i++) { // loop works
       
      
        const bookPlaceholder = document.createElement("div");
        bookPlaceholder.classList.add(".bk-placeholder");
        //const newBook = new Book(title, author, pages, read, id);

      
      //  let allBooks = document.querySelectorAll(".bk-placeholder");

        

        

          let bookID = myLibrary[i].id;
         
         console.log(bookID);
         
         bookPlaceholder.setAttribute("data-id", `${bookID}`);



         let bkIndex2Del = bookPlaceholder.dataset.id;


         
         console.log(bkIndex2Del);


        //bookID = bkIndex2Del;

         //bkIndex2Del = bookID;

         /*
         console.log(bookID = bkIndex2Del);
          console.log(bkIndex2Del = bookID);
          console.log(bookID);
          console.log(bkIndex2Del);
*/


      /*   
        
        allBooks.forEach(allBook => { 
        
          allBook.addEventListener("mouseover", (e) => {
            console.log(e.target);

          if (bkIndex2Del === bookID) {
            e.target.display = "none";
          }

          });

        });

        */

        
        
        console.log(myLibrary);

        
        
        /*
        function BookIdent(bookID) {
          this.id = crypto.randomUUID();
          bookID = this.id;
          this.title = "";
          let datasetIDs = document.querySelectorAll("[data-id]");

          datasetIDs.forEach(datasetID => {
            datasetID = bookID;
            bookID = datasetID;

            console.log(bookID);
            return bookID;
          });
          

        }

        */

        /*

      //  BookIdent.prototype.sayID = function() {

          Book.prototype.sayID = function() {
          console.log(`Hello, ${this.title} has ${this.id}.`);
          
        };

        Object.setPrototypeOf(Book.prototype, Book.prototype.sayID);
Object.getPrototypeOf(Book.prototype); // returns BookIdent.prototype

*/


       // const bookID = bookPlaceholder.dataset.id; //crypto.randomUUID()
        console.log(bookPlaceholder.dataset.id);
       // if (bookID == )
//console.log(this.id);
        //bookID = bookPlaceholder.dataset.id;

        
        
       // for (const key in bookPlaceholder.dataset.id) {
       //   if (bookPlaceholder.dataset.id.hasOwnProperty(key)) {
//console.log(bookPlaceholder.dataset.id.hasOwnProperty(key));

          //  myLibrary[key] = bookPlaceholder.dataset.id[key];
        //    console.log(myLibrary[key]);
            
        //  }
        //  console.log(myLibrary[key]);
       // }
        
        

       // bookPlaceholder.dataset.title;
      //  bookPlaceholder.dataset.author;
      //  bookPlaceholder.dataset.pages;
     //  bookPlaceholder.dataset.read;

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

        addBkButton.onclick = function () { dialog.showModal(); };

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
          
       // removeBkButton.setAttribute("data-id", `${bookID}`);

        //const rmvBookIDBtn = removeBkButton.dataset.id;

        //console.log(rmvBookIDBtn);
        

        

          
         

        removeBkButton.onclick = function () { 

        // the index needs to be equal to the correct book card that is clicked!


      //  const allbookCards = document.querySelectorAll(".bk-placeholder");
       
        //allbookCards.forEach(allbookCard => {


  


  const index = [...Array.from(bookPlaceholder.parentElement.children)].indexOf(bookPlaceholder); //myLibrary.indexOf(allbookCards) = -1; // allbookCards.length = 0

  console.log(index); // is showing each clicked book card now // - 1 for rmvBookIDBtn & bookPlaceholder & allbookCards

//console.log(index.id); // doesn't work
  //const bookIndex = [...Array.from(bkIndex2Del)].indexOf(bkIndex2Del);

  //console.log(bookIndex); // no still - 1

  if (bookID === bkIndex2Del) {

  myLibrary.splice(index, 1); // works, deletes the active bookcard


}
          

         


     // for (k = 0; k < myLibrary.length - 1; k++) {
/*
        const bookValues = myLibrary.filter(function (el) {
         
         console.log(el.id); // lists all book IDs
          return el.id; //= bkIndex2Del //&&
                // el.sqft >= 500 &&
                 //el.num_of_beds >=2 &&
                // el.num_of_baths >= 2.5;
        });

        console.log(bookValues); // prints array
        console.log(bookValues.bkIndex2Del);

       let indexOfBook = bookValues.length;

        console.log(indexOfBook);
        */

//}


          // if (index !== -1) {

          //  myLibrary.splice(index, 1);
           
         //  }
          

          

         //if bookplaceholder is selected itself, remove the corresponding id

         
         

          
         
                  
       

        
          

       // book.focus({ focusVisible: false });

        

         

            
          



/*
         book.addEventListener('focus', () => {
          console.log('Element received focus');

           console.log(bkIndex2Del);
           if (bkIndex2Del === bookID) {

            myLibrary.splice(bkIndex2Del, 1);
          }

        }); // focus listener
*/
      
    

          
        

         // const bkIndex2Del = myLibrary.findIndex(addBookToLibrary, title);

        // myLibrary.findIndex((value) => value () { 
          

        // });

         

        

       // let indexBk = myLibrary.indexOf(BookIdent.prototype.bind(bookID)); //BookIdent()
        //console.log(Book.prototype.bind(title)); //BookIdent()


        //console.log(indexBk);

        /*
        myLibrary.forEach((value) => {
          let bookID = value.id;

          console.log(bookID);

          if (bkIndex2Del === bookID) {

            myLibrary.splice(bkIndex2Del, 1);
          }
        });

        */

        

         

          //console.log(myLibrary);
          displayBook();

        };

      

  
     

      
        

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


  //Add a “New Book” button that brings up a form allowing users to input the 
  // details for the new book and add it to the library.

 
 const dialog = document.querySelector("dialog");

 const popUp = document.querySelector("#popup");

 /* 
 
 const addBkButtonUpdate = document.querySelectorAll("#add-bk");

  addBkButtonUpdate.forEach(addbutton => {

    addbutton.addEventListener("click", () => {

        dialog.showModal();


  
    });

  });
*/
 
/*
function click2Add() {

  dialog.showModal();

}
  */


  const formEl = document.querySelector(".form");
 let inputEl = popUp.querySelectorAll("input");
  //const title = document.getElementById("bk-title").value;
 // const author = document.getElementById("bk-author").value;
  //const pages = document.getElementById("bk-pgs").value;
  //const read = document.getElementById("bk-read").value;

  


//  dialog.addEventListener("close", (e) => {
  //  formEl.value =
  //    dialog.returnValue === "default"
 //       ? "No return value."
 //      : `ReturnValue: ${dialog.returnValue}.`; // Have to check for "default" rather than empty string
 // });


  //const confirmBtn = document.getElementById("#submit"); // probably wasn't working as only a form can have a submit event listener

  formEl.addEventListener('submit', (e) => {

    e.preventDefault(); // We don't want to submit this fake form

    const formData = new FormData(formEl);
   // console.log(...formData);


   //console.log(formData.get('bk-title'));
   //console.log(formData.get('bk-author'));
  // console.log(formData.get('bk-pgs'));
  // console.log(formData.get('bk-read'));

   const title = formData.get('bk-title');
   const author = formData.get('bk-author');
   const pages = formData.get('bk-pgs');
   const read = formData.get('bk-read');

    validateForm();



// add new book to library
 addBookToLibrary(title, author, pages, read);

 //console.log(addBookToLibrary(title, author, pages, read)); // this made it run twice
//addBookNow(title, author, pages, read);

// refesh display to show book
displayBook(); // needed to show up

//reset form after submission
formEl.reset();


    dialog.close(); // Have to send the form value here.


  });


  function validateForm() {
    let title = document.forms["form"]["bk-title"].value;
    let author = document.forms["form"]["bk-author"].value;
    let pages = document.forms["form"]["bk-pgs"].value;
    let read = document.forms["form"]["bk-read"].value;


    if(pages != ""){
      pages = parseFloat(pages);
      if(isNaN(pages)){
        console.log("Not a number");
      }
    }

    
// let inputValue = inputEl.value.trim(); // inputEL value is always undefined
 //   if (inputValue === "") {
  //    console.log("Input is empty or contains only whitespace");
  //  }


    if (title === "" || author === "" || pages === "" || read === "") {
      alert("Field must be filled out");
      return false;
    }
    return true;
  }


 
 //function deleteBook () {

  
      //myLibrary.splice(bookID, 1);



//}

//deleteBook();