class LS {
    //help functions to get and send data from LS
    getData(name) {
        let data;
        if (localStorage.getItem(name) === null) {
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem(name));
        }
        return data
    }

    setData(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    addBook(book) {
        let books = this.getData('books')
        books.push(book);
        this.setData('books', books);
    }

    delBook(bookISBN) {
        let books;
        //check if there is an element 'books' in local storage, if not then create an empty array
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        //remove an element without leaving holes in the array
        books.forEach(function (book, index) {
            //if the second book array item is the same as bookISBN (isbn value)
            if(book.isbn === bookISBN) {
                //get the item index and delete 1 item aka that exact item
                books.splice(index, 1)
            }
        });

        //overwrite localStorage without the deleted element
        localStorage.setItem('books', JSON.stringify(books));
    }
}