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
        liElem.innerHTML = `<div class="items-container ${todoItem.completed ? "doneItem" : ""}" index=${todoItem.index} completed=${todoItem.completed} isDeleted=${todoItem.isDeleted}>
                                <span class="todos_span">${todoItem.title}</span>
                                <button class="todos_edit">Edit</button>
                                <button class="todos_done">Done</button>
                                <button class="todos_delete">Delete</button>
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
        if (target.classList.contains('todos_delete')){  
            let todos = controller.deleteItem(e)          
            view.render(todos);            
        }
        if (target.classList.contains('todos_done')){  
            let todos = controller.doneItem(e);       
            view.render(todos);            
        }          
    }    
} 

const view = new View();