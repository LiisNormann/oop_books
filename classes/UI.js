class UI {
    addBook(book){
        // create <tr> element
        const tr = document.createElement('tr');
        // td for title, author and isbn
        for(let name in book){
            // create <td> element
            let td = document.createElement('td');
            // create text element
            let text = document.createTextNode(book[name]);
            // add text to <td>
            td.appendChild(text);
            // add td to tr
            tr.appendChild(td);
            console.log(tr)
        }
        // X link
        // create <td> element
        let td = document.createElement('td');
        // create <a> element
        const link = document.createElement('a');
        // set href atribute to <a>
        link.setAttribute('href', '#');
        // add text content to <a>
        link.appendChild(document.createTextNode('X'));
        // add <a> to <li>
        td.appendChild(link);
        // add td to tr
        tr.appendChild(td);
        // add tr to tbody
        const booksList = document.querySelector('#books-list');
        booksList.appendChild(tr);
    }
}