class UI {
    // help function to add DOM element
    addUIElement(name, classname = '', textcontent = '', atributes = {}){
        // create element
        const element = document.createElement(name);
        // add css style class to element
        if(classname !== ''){
            element.className = classname
        }
        // add text content to element
        element.appendChild(document.createTextNode(textcontent))
        // add atributes to element
        if(Object.keys(atributes).length > 0){
            for(let key in atributes){
                element.setAttribute(key, atributes[key])
            }
        }
        return element
    }
    
    addBook(book){
        // create <tr> element
        const tr = this.addUIElement('tr')
        // td for title, author and isbn
        for(let name in book){
            // create <td> element and add text
            let td = this.addUIElement('td', '', book[name])
            // add td to tr
            tr.appendChild(td)
        }
        // X link
        // create <td> element
        let td = this.addUIElement('td')
        // create <a> element
        const link = this.addUIElement('a', '', 'X', {'href':'#'})
        // add link to td
        td.appendChild(link)
        // add td to tr
        tr.appendChild(td)
        // add tr to tbody
        const booksList = document.querySelector('#books-list')
        booksList.appendChild(tr)
    }

    //if X is clicked, the book is removed from the list
    delBook(event) {
        //if X is clicked
        if(event.target.textContent === 'X') {
            //ask for confirmation
            if(confirm('Do you want to delete this book?')){
                event.target.parentElement.parentElement.remove();
                let bookISBN = event.target.parentElement.previousElementSibling.textContent;
                console.log(bookISBN);
                const ls = new LS();
                ls.delBook(bookISBN);
            }
        }
    }
}