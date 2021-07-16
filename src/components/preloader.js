export default class Preloader {
    hidePreloader() {
        let preloader = document.getElementById('page-preloader')
        window.checkStatus = false;
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done')
            window.checkStatus = true;
        }        
    }
}
