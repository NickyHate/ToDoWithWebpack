import './styles/style.scss';
import Preloader from './components/preloader';
import Controller from './components/controller';
import View from './components/view';
import ToDoItem from './components/model';

const preloader = new Preloader();
const view = new View()
const model = new ToDoItem()
const controller = new Controller(view, model);
console.log(JSON.stringify(model));
document.body.onload = preloader.hidePreloader();
document.body.onload = controller.init()

