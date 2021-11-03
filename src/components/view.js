export default class View  {
    /*
        { title: string, completed: bool, index: number, order: number, isDeleted: bool}
    */
    constructor(){
        
    }   
    render(){
    
    } 
    createToDoItem(todoItem){
        console.log(todoItem)
        let ul = document.querySelector('.todos')
        let text = document.querySelector('#text').value
        let liElem = document.createElement('li')
        liElem.innerHTML = `<div class="items-container">
                                <span class="todos_span" completed="true" index="1">${text}</span>
                                <button class="todos_edit">Edit</button>
                                <button class="todos_done">Done</button>
                                <button class="todos_delete" onclick="">Delete</button>
                            </div>`
        ul.appendChild(liElem);
    }
    deleteItem(e){
        console.log(e)
    }      
} 
