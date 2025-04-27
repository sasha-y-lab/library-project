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
    this.isRead = false;
    this.read = read;
    this.id = crypto.randomUUID();
   // this.id = bookID;
   // this.createBook = function() {
   //   console.log(this.title + ",", this.author + ",", this.id + ",", this.pages + ",", this.read)
  //    // return this.createBook(); creates too much in a endless loop
  //  };
 // return this.createBook();
 
 //this.isRead = false; // iniital state

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

        /*
        const bkRead = document.createElement("p");
       bkRead.classList.add("bk-read");
       // bkRead.textContent = "Read: " + myLibrary[i].read;
       bkRead.textContent = "";
        bookTxt.appendChild(bkRead);
        */

        const readBtn = document.createElement("button");
        readBtn.classList.add("falsestate");
        readBtn.setAttribute("id", "rd-status");
        readBtn.textContent = "Read";
        readBtn.setAttribute("data-read", "isRead");
        //readBtn.style.backgroundColor = "transparent";
        //readBtn.style.color = "#2B303A";
        //readBtn.style.border = "thin solid #B53434";

       // readBtn.addEventListener("click", (e) => {


       // });

        bookTxt.appendChild(readBtn);


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

 


  const formEl = document.querySelector(".form");
 let inputEl = popUp.querySelectorAll("input");
  
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


 
 // Add a button on each book’s display to change its read status.
// To facilitate this you will want to create Book prototype function
// that toggles a book instance’s read status.



Book.prototype.toggleReadStatus = function () {

//const updatedBookPlaceholder = document.querySelectorAll(".bk-placeholder");

//const bkRead = document.querySelectorAll(".bk-read");
//bkRead.textContent = "";

//this.isRead = false;

//this.isRead = !this.isRead;





/*
const readBtn = document.createElement("button");
readBtn.classList.add(".read-status");
readBtn.textContent = "Read";
*/

const updateReadBtns = document.querySelectorAll("#rd-status");


updateReadBtns.forEach(updateReadBtn => {

  updateReadBtn.isRead = false;

updateReadBtn.addEventListener("click", (e) => {
console.log(e.target);

updateReadBtn.isRead = !updateReadBtn.isRead;


  //let falseState = updateReadBtns.className = "falsestate";
 // let trueState = updateReadBtns.className = "truestate";
 
  if (updateReadBtn.isRead) {

    updateReadBtn.classList.add("truestate");
    updateReadBtn.classList.remove("falsestate");
  return;
  }
   else if (!updateReadBtn.isRead) {

    updateReadBtn.classList.add("falsestate");
    updateReadBtn.classList.remove("truestate");

    return;
} else if (new Book()) {
  updateReadBtn.classList.add("truestate");
  updateReadBtn.classList.remove("falsestate");
return;
} else {
  return;
}


});

});








  

//displayBook();

  return this.isRead;

}
Book.prototype.toggleReadStatus();