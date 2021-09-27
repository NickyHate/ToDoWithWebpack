import './styles/style.scss';
import Preloader from './components/preloader';
import Controller from './components/controller';
const preloader = new Preloader();
const controller = new Controller();

document.body.onload = preloader.hidePreloader();
document.body.onload = controller.setUlData();

const saveButton = document.querySelector('#add');

saveButton.addEventListener('click', function(){
    controller.checkValue()
})






