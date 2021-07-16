import './styles/style.scss';
import Preloader from './components/preloader';
import Task from './components/task';

const preloader = new Preloader();
const task = new Task();
const saveButton = document.querySelector('.save');
const clearButton = document.querySelector('.clear');

document.body.onload = preloader.hidePreloader();

saveButton.addEventListener('click', function(){
    task.createTask()
})

clearButton.addEventListener('click', function(){
    task.clearValue()
})



