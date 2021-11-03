export default class Controller {
    constructor(view, model){
        let addButton = document.querySelector('#add');
        addButton.onclick = () => this.addItem()
        this.view = view
        this.model = model       
    }
    init(){
        
    }
    addItem(){
        let title = document.querySelector('#text').value
        this.model.title = title
        this.view.createToDoItem(this.model)      
    }
    deleteItem(e){
        console.log(e)
    }
}