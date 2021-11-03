export default class View  {
    constructor(){
        
    }   
    render(){
    
    } 
    createItem(){
        let ul = document.querySelector('.todos')
        let text = document.querySelector('#text').value
        let liElem = document.createElement('li')
        liElem.innerHTML = `<div class="items-container">
                                <span class="todos_span">${text}</span>
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
