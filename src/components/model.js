export default class ToDoItem {
    /*
        { title: string, completed: bool, index: number, order: number, isDeleted: bool}
    */
    constructor(listItem) {
        if (!listItem) {
            listItem = {};
        }
        this.title = listItem.title ? listItem.title : '';
        this.completed = listItem.completed ? listItem.completed : false;
        this.index = listItem.index ? listItem.index : -1;
        this.order = listItem.order ? listItem.order : -1;
        this.isDeleted = listItem.isDeleted ? listItem.isDeleted : false;
    }
    toLocal(){
    
    }
    parseDataFromLocal(){
        if (!this.listItem) {
            return ['Empty']
        } else {
            return this.listItem
        }
    }

    // getText(){        
    //     let text = document.querySelector('#text');
    //     return text.value
    // }
    // saveItemToLocal(){
    //     let ulElem = document.querySelector('.todos');
    //     let ulData = ulElem.innerHTML;
    //     localStorage.setItem('todos', ulData)
    // }
    // getItemFromLocal(){
    //     if (localStorage.getItem('todos')) {
    //         return localStorage.getItem('todos');
    //     } else {
    //         return 'Список пуст';
    //     }
    // }
}