export default class View  {
    clearText(){
        let text = document.querySelector('#text');
        text.value = "";
    } 
    addItem(item){
        let ulElem = document.querySelector('.todos');
        if (ulElem.innerHTML === 'Список пуст') {
            ulElem.innerHTML = null;
        } 
        let liElem = document.createElement('li');
        let itemsContainer = document.createElement('div')
        let spanItem = document.createElement('span');
        let editItem = document.createElement('button');
        let doneItem = document.createElement('button');
        let deleteItem = document.createElement('button');
        
        liElem.classList.add('todos_item');
        itemsContainer.classList.add('items-container')
        spanItem.classList.add('todos_span');
        editItem.classList.add('todos_edit');        
        doneItem.classList.add('todos_done');
        deleteItem.classList.add('todos_delete');

        spanItem.innerHTML = item;
        editItem.innerHTML = 'Edit';
        doneItem.innerHTML = 'Done';
        deleteItem.innerHTML = 'Delete';
                
        itemsContainer.appendChild(spanItem);
        itemsContainer.appendChild(editItem);       
        itemsContainer.appendChild(doneItem);
        itemsContainer.appendChild(deleteItem);

        liElem.appendChild(itemsContainer);
        ulElem.appendChild(liElem);
    }
    deleteItem(){

    }
}
