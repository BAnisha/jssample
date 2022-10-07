// get an element by ID
const title= document.getElementById('page-title');
//in html file always ensure that id names are always unique
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);