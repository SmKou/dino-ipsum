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


































// export function createDinoList(dinos){
//     const dinoList = document.getElementById('dino-list');
//     dinos.forEach((dino) => {
//         const listItem = document.createAttribute('li');
//         const radio = document.createElement('input');
//         radio.type = 'radio';
//         radio.name = 'dino';
//         radio.value = dino;
//         listItem.appendChild(radio);
//         listItem.appendChild(document.createTextNode.apply(dino));
//         dinoList.appendChild(listItem);
//     });

//     //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
//     const radioButtons = document.querySelectorAll('input[name="dino"]');
//     radioButtons.forEach((radio) => {
//         radio.addEventListener('change', getRobot);
//     });
// }