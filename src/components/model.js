export default class Model {
    getText(){        
        let text = document.querySelector('#text');
        return text.value
    }
    saveItemToLocal(){
        let ulElem = document.querySelector('.todos');
        let ulData = ulElem.innerHTML;
        localStorage.setItem('todos', ulData)
    }
    getItemFromLocal(){
        if (localStorage.getItem('todos')) {
            return localStorage.getItem('todos');
        } else {
            return 'Список пуст';
        }
    }
}