import './styles/style.scss';
import Preloader from './components/preloader';
import View from './components/view';

const preloader = new Preloader();
let view = new View();
view.init()

document.body.onload = preloader.hidePreloader();
// document.body.onload = controller.init();
//{ title: 'string', completed: true, index: 1, order: 1, isDeleted: true}

