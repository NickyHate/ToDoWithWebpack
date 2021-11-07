export default class Controller {
    constructor(view, model, list){
        let addButton = document.querySelector('#add');
        addButton.onclick = () => this.addItem()
        this.view = view
        this.model = model   
        this.list = list
        document.addEventListener('click', this.action.bind(this))    
    }
    init(){
        
    }
    addItem(){
        let title = document.querySelector('#text').value
        this.model.title = title
        this.model.action = this.action
        this.list.todos.push(this.model)
        this.list.toLocal()
        this.view.createToDoItem(this.model)      
    }
    action(e){
        let target = e.target
        if (target.classList.contains('todos_delete')){
            this.model.isDeleted = !this.model.isDeleted
            this.view.render(this.model)
        }
        if (target.classList.contains('todos_done')){
            this.view.doneItem(target)
        }
    }    
}