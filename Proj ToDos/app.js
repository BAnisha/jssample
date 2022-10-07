const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');

const generateTemplate =todo=>{
    const html= `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML+=html;
};

addForm.addEventListener('submit',e =>{

    e.preventDefault();
    const todo= addForm.add.value.trim();
    //console.log(todo);
    if (todo.length){//check not blank
        generateTemplate(todo);//adds to the todo list
        addForm.reset();//clears the 
    }    
});

//delete items
list.addEventListener('click',e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    
});

//Searching or filtering Event
const filterToDos=(term)=>{
    
    Array.from(list.children)
     .filter((todo)=> !todo.textContent.toLowerCase().includes(term))//selecting terms we dont want want
     .forEach((todo)=>todo.classList.add('filtered'));//adding a class named filtered to li -hide
    Array.from(list.children)
     .filter((todo)=> todo.textContent.toLowerCase().includes(term))//selecting terms we want
     .forEach((todo)=>todo.classList.remove('filtered'));//removing filtered class to lis to be seen
}
//get input
search.addEventListener('keyup',()=>{
    const term= search.value.trim().toLowerCase();
    filterToDos(term);

});