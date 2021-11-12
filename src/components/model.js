class ToDoItem {
    /*
        { title: string, completed: bool, index: number, order: number, isDeleted: bool}
    */
    constructor(listItem) {        
        if (!listItem) {
            listItem = {};
        }
        this.title = listItem.title ? listItem.title : '';
        this.completed = listItem.completed ? listItem.completed : false;
        this.index = listItem.index ? listItem.index : 0;
        this.order = listItem.order ? listItem.order : -1;
        this.isDeleted = listItem.isDeleted ? listItem.isDeleted : false;
    }
}
class ToDoList {
    constructor(list){
        if (!list) {
            list = {}
        }
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
    }
    toLocal(){
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }
    getDataFromLocal(){
        return this.todos
    }
}    
export { ToDoItem, ToDoList }