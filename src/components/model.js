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
        this.order = listItem.order ? listItem.order : 1;
        this.isDeleted = listItem.isDeleted ? listItem.isDeleted : false;
    }
}
class ToDoList {
    constructor(list){
        if (!list) {
            list = {}
        }
        this.todos = list.todos ? list.todos : [];
        this.counter = 0;
    }
    add(obj){
        obj.index = this.counter++;
        obj.order = this.order++;
        let newToDoItem = new ToDoItem(obj);
        this.todos.push(newToDoItem);
        localStorage.setItem('todos', JSON.stringify(this.todos))
        return newToDoItem
    }
    delete(idx){
        let elemIdx = null;
        this.todos.find(function(el, index){
            if (el.index == idx) {  
                el.isDeleted = true;              
                elemIdx = index;
            }
        });
        this.todos.splice(elemIdx, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos))
        return this.todos
    }
    done(idx){
        let elemIdx = null;
        this.todos.find(function(el, index){
            if (el.index == idx) {
                el.completed = true;
                elemIdx = index;
            }
        });
        localStorage.setItem('todos', JSON.stringify(this.todos))
        return this.todos
    }
    getDataFromLocal(){
        return JSON.parse(localStorage.getItem('todos'));
    }
}    
export { ToDoItem, ToDoList }