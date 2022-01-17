class LS {
    addBook(book){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
}