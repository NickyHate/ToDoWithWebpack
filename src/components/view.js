export default class View  {
    /*
        { title: string, completed: bool, index: number, order: number, isDeleted: bool}
    */
    constructor(){
        
    }   
    render(todoList){
        let ul = document.querySelector('.todos')
        if (todoList.length) {
            ul.innerHTML = ''
            todoList.map(function(el){                
                let liElem = document.createElement('li')
                liElem.innerHTML = `<div class="items-container">
                                        <span class="todos_span" completed=${el.completed}>${el.title}</span>
                                        <button class="todos_edit">Edit</button>
                                        <button class="todos_done">Done</button>
                                        <button class="todos_delete">Delete</button>
                                    </div>`        
                ul.appendChild(liElem);
            })
        } else {
            ul.innerHTML = 'List is empty'
        }
    } 
    createToDoItem(todoItem){
        let ul = document.querySelector('.todos')
        if (ul.innerHTML === 'List is empty') {
            ul.innerHTML = ''
        }
        let liElem = document.createElement('li')
        liElem.innerHTML = `<div class="items-container">
                                <span class="todos_span" completed=${todoItem.completed}>${todoItem.title}</span>
                                <button class="todos_edit">Edit</button>
                                <button class="todos_done">Done</button>
                                <button class="todos_delete">Delete</button>
                            </div>`        
        ul.appendChild(liElem);
    }
    doneItem(target){
    
    }    
} 
