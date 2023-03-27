let library = [];



let btn = document.querySelector('.btn');

let book1 = document.querySelector('.name')
let author1 = document.querySelector('.author')
let pages1 = document.querySelector('.pages') 

let cont = document.querySelector('.books')

function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
};

btn.addEventListener('click', (event) => {
    library.push(new Book(book1.value, author1.value, pages1.value));
    book1.value = '';
    author1.value = '';
    pages1.value = ''; 

  
    

    let div = document.createElement('div')
    div.className = 'card';
    let p1 = document.createElement('p')
    p1.textContent = `Name:${library[library.length -1].name}`;
    let p2 = document.createElement('p')
    p2.textContent = `Author:${library[library.length - 1].author}`;
    let p3 = document.createElement('p')
    p3.textContent = `Pages:${library[library.length - 1].pages}`;
    cont.appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
   

})













