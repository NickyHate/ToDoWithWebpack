import View from './view';
import Model from './model';

const view = new View();
const model = new Model();

export default class Controller {
    setUlData(){
        let ulElem = document.querySelector('.todos');
        ulElem.innerHTML = model.getItemFromLocal();
    }
    checkValue(){
        if (model.getText() !== "") {
            view.addItem(model.getText());
            model.saveItemToLocal();
            view.clearText();
        } else {
            alert('Поле не может быть пустым')
        }
    }      
}