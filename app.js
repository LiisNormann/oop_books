//UI and LS object
const ui = new UI();
const ls = new LS();

// event elements
const form = document.querySelector('form');
const booksList = document.querySelector('#books-list');

// events
form.addEventListener('submit', addBook);
booksList.addEventListener('click', delBook);
document.addEventListener('DOMContentLoaded', getBooks);

function getBooks() {
    let books = ls.getData('books')
    for(let i = 0; i < books.length; i++) {
        let book = books[i];
        ui.addBook(book)
    }
}

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // create book
    const book = new Book(title, author, isbn);
    console.log(book)
    ui.addBook(book);
    console.log(ui)
    //addBook to LS
    ls.addBook(book)

    //addBookToLocalStorage(book);
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault();
}

function delBook (event) {
    console.log(event);
    /*ls.delBook(event);*/
    ui.delBook(event);
}