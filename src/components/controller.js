export default class Controller {
    constructor(view, model){
        let addButton = document.querySelector('#add');
        addButton.onclick = () => this.addItem()
        this.view = view
        this.model = model   
        document.addEventListener('click', this.action.bind(this))    
    }
    init(){
        
    }
    addItem(){
        let title = document.querySelector('#text').value
        this.model.title = title
        this.model.action = this.action
        this.view.createToDoItem(this.model)      
    }
    action(e){
        let target = e.target
        if (target.classList.contains('todos_delete')){
            this.deleteItem(target)
        }
    }
    deleteItem(target){
        target.closest('li').remove()
    }
}