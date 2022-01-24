// Подключаем контроллер во вью
import Controller from "./controller";
import { ToDoList } from './model';

const localList = new ToDoList();
const controller = new Controller(localList);

export default class View  {
    /*
        { title: string, completed: bool, index: number, order: number, isDeleted: bool}
    */
    constructor(){
        
    }   
    init(){
        let btnAdd = document.querySelector('.add');
        let todos = controller.getTodos();
        btnAdd.addEventListener('click', this.btnAddClick);
        document.addEventListener('click', view.action);
        view.render(todos);
    }
    render(todoList){
        console.log(todoList, 'todoList')
        let ul = document.querySelector('.todos')
        if (todoList) {
            ul.innerHTML = ''
            todoList.map(function(el){ 
                view.createToDoItem(el);
            })
        } else {
            ul.innerHTML = 'List is empty'
        }
    }     
    createToDoItem(todoItem){
        let ul = document.querySelector('.todos')
        if (ul.innerHTML === 'List is empty') {
            ul.innerHTML = ''
        }
        let liElem = document.createElement('li');
        liElem.innerHTML = `<div class="items-container ${todoItem.completed ? "completed" : ""}" index=${todoItem.index} completed=${todoItem.completed} isDeleted=${todoItem.isDeleted}>
                                <input type="checkbox" class="checkbox" ${todoItem.completed ? "checked" : ""}>
                                <span class="todos_span ${todoItem.completed ? "doneItem" : ""}">${todoItem.title}</span>
                                <div class="todos_edit_container">                                    
                                    <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg class="todos_edit" style="vertical-align: middle;cursor: pointer;" height="32" id="Layer_1" version="1.1" viewBox="0 0 64 64" width="32" fill="white" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z"/><polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  "/><polygon points="20.273,37.028 18.642,46.28 27.913,44.654  "/><path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z"/></g></svg>
                                </div>
                                <div class="todos_delete_container">                                    
                                    <?xml version="1.0" ?><svg class="todos_delete" style="vertical-align: middle;cursor: pointer;" height="32" viewBox="0 0 48 48" width="32" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
                                </div>
                            </div>`        
        ul.appendChild(liElem);
    }
    btnAddClick(){        
        let title = document.querySelector('#text').value; 
        let newItem = controller.addItem({ title: title });        
        view.createToDoItem(newItem);
        document.querySelector('#text').value = '';       
    }
    action(e){
        let target = e.target;        
        if (target.parentElement.classList.contains('todos_delete')){  
            let todos = controller.deleteItem(e)          
            view.render(todos);            
        }
        if (target.classList.contains('checkbox')){   
            let todos = controller.doneItem(e);       
            view.render(todos);            
        }          
    }    
} 

const view = new View();