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
        this.index = listItem.index ? listItem.index : -1;
        this.order = listItem.order ? listItem.order : -1;
        this.isDeleted = listItem.isDeleted ? listItem.isDeleted : false;
    }
}
class ToDoList {
    constructor(list){
        if (!list) {
            list = {}
        }
        this.todos = []
    }
    toLocal(){
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }
}    
export { ToDoItem, ToDoList }