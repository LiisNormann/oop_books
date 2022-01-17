class LS {
    // help functions  to get and set data at LS
    getData(name){
        let data;
        if(localStorage.getItem(name) === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(name))
        }
        return data
    }

    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data))
    }
    addBook(book){
        let books = this.getData('books')
        books.push(book);
        this.setData('books', books)
    }
}