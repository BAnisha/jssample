// const para = document.querySelector('p');
// const para = document.querySelector('.error');
const para = document.querySelector('div.error');

console.log(para);

// query multiple elements at once
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(paras, errors);
console.log(paras[1], errors[0]);

/*Notes:ifyou want to find out what the selector for a specific tag, 
then in browser dev tools have elemts tab open, 
on right side right click -> inspect ==> In element tab,
hovering over each tag find the one you are looking to find the selector 
for and then right click on the html tag and select copy
When you paste it will give you the selector.
Might driectly give you option to copy selector depending on broswer*/