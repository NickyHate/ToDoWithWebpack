// Сюда добавляем модель, при добавлении элемента вызываем новый класс TodoItem

export default class Controller {    
    constructor(localList){ 
        this.list = localList
    }
    addItem(obj){
        return this.list.add(obj);         
    }
    getTodos(){
        return this.list.getDataFromLocal()
    }
    action(e){
        let target = e.target;
        if (target.classList.contains('todos_delete')) {
            console.log(e)            
        }
    }
    deleteItem(e){
        let idx = e.target.parentElement.attributes.index.value;
        return this.list.delete(idx);
        // console.log( this.list.todos, 'Item delete Controller')
    }
    doneItem(e){
        let idx = e.target.parentElement.attributes.index.value;
        return this.list.done(idx);
        // console.log( this.list.todos, 'Item delete Controller')
    }
}