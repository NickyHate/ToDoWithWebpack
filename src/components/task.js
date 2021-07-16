export default class Task {
    
    createTask(){    
        let text = document.querySelector('#text');
        const getUl = document.querySelector('.todos');
        const addContainer = document.createElement('div');
        const addElem = document.createElement('li');
        const addDeleteButton = document.createElement('button')
        addElem.innerHTML = text.value;
        addElem.classList.add('todo-text');
        addContainer.classList.add('list-container');
        addDeleteButton.classList.add('delete');
        addDeleteButton.innerHTML = '&#10006';
        getUl.appendChild(addContainer);
        addContainer.appendChild(addElem);
        addContainer.appendChild(addDeleteButton);
        let delButtons = document.querySelectorAll('.delete');
        delButtons.forEach(function(item){
            item.addEventListener('click', function(){
                item.parentNode.remove()
            })
        })
        
        text.value = "";
    }
    clearValue(){
        let text = document.querySelector('#text');
        if(text.value.length > 0){
            text.value = "";
        };
    }
}