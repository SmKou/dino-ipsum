import './css/fonts.css';
import './css/styles.css';

const controller = {
    genDinos: document.querySelector('#generate-dinos'),
    getRoboType: () => document.querySelector('[name="robo-type"]:checked'),
    showDinos: document.querySelector('.dinosaurs'),
    showRobos: document.querySelector('.robo-grid')
}

document.querySelector('form').addEventListener('reset', () => {
    
})