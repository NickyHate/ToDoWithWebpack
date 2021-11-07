export default class View  {
    /*
        { title: string, completed: bool, index: number, order: number, isDeleted: bool}
    */
    constructor(){
        
    }   
    render(todoItem){
        console.log(todoItem)
    } 
    createToDoItem(todoItem){
        let ul = document.querySelector('.todos')
        let liElem = document.createElement('li')
        liElem.innerHTML = `<div class="items-container">
                                <span class="todos_span" completed=${todoItem.completed}>${todoItem.title}</span>
                                <button class="todos_edit">Edit</button>
                                <button class="todos_done">Done</button>
                                <button class="todos_delete">Delete</button>
                            </div>`        
        ul.appendChild(liElem);
    }
    deleteItem(todoItem){
        todoItem.isDeleted = !todoItem.isDeleted
        return todoItem
    } 
    doneItem(target){
    
    }    
} 
