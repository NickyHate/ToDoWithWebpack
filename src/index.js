import './styles/style.scss';
import Preloader from './components/preloader';
import Controller from './components/controller';
import View from './components/view';
import {ToDoItem, ToDoList} from './components/model';

const preloader = new Preloader();
const view = new View()
const model = new ToDoItem()
const localList = new ToDoList()
const controller = new Controller(view, model, localList);

document.body.onload = preloader.hidePreloader();
document.body.onload = controller.init();
//{ title: 'string', completed: true, index: 1, order: 1, isDeleted: true}