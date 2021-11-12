export default class Controller {
    constructor(view, model, list){
        this.view = view
        this.model = model   
        this.list = list
        document.addEventListener('click', this.action.bind(this))    
    }
    init(){
        this.view.createToDoItem()
    }
    addItem(){
        let title = document.querySelector('#text').value
        this.model.title = title
        this.model.action = this.action
        this.model.index = this.list.todos.length
        this.list.todos.push(this.model)
        this.list.toLocal()              
    }
    action(e){
        let target = e.target
        if (target.classList.contains('add')){
            this.addItem()
            this.view.createToDoItem(this.model)
        }
        if (target.classList.contains('todos_delete')){
            console.log(target)
            this.view.render(this.model)
        }
        if (target.classList.contains('todos_done')){
            this.view.doneItem(target)
        }
    }    
}