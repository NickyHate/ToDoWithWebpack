export default class View  {
    /*
        { title: string, completed: bool, index: number, order: number, isDeleted: bool}
    */
    constructor(){
        
    }   
    render(){
    
    } 
    createToDoItem(todoItem){
        let ul = document.querySelector('.todos')
        let liElem = document.createElement('li')
        liElem.innerHTML = `<div class="items-container">
                                <span class="todos_span" completed="true" index="1">${todoItem.title}</span>
                                <button class="todos_edit">Edit</button>
                                <button class="todos_done">Done</button>
                                <button class="todos_delete" onclick="${todoItem.action}">Delete</button>
                            </div>`        
        ul.appendChild(liElem);
    }     
} 
