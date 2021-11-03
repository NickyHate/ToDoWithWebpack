export default class Controller {
    constructor(view, model){
        let addButton = document.querySelector('#add')
        addButton.onclick = () => this.addItem() 
        this.view = view
        this.model = model       
    }
    init(){
        console.log(this.view, 'view')
        console.log(this.model, 'model')
    }
    addItem(){
        this.view.createItem()      
    }
    deleteItem(e){
        console.log(e)
    }
}