import getDinos from './js/bs/Dinosaur';
import Robot from './js/bs/Robot';

import './css/fonts.css';
import './css/styles.css';

const controller = {
    genDinos: document.querySelector('#generate-dinos'),
    genNum: document.querySelector('#gen-number'),
    getRoboType: () => document.querySelector('[name="robo-type"]:checked'),
    showDinos: document.querySelector('.dinosaurs'),
    showRobos: document.querySelector('.robo-grid')
};

document.querySelector('form').addEventListener('reset', () => {
    
});

function createDinoList(dinos) {
    dinos.forEach((dino) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('id', dino);
        listItem.appendChild(document.createTextNode(dino));
        controller.showDinos.appendChild(listItem);
    });
}

controller.genDinos.addEventListener("click", e => {
    e.preventDefault();
    getDinos(controller.genNum.value).then(dinoList => createDinoList(dinoList));
});

controller.showDinos.addEventListener('click', e => {
    const dino = e.target.id;
    const roboType = controller.getRoboType().value;
    const robot = new Robot(dino, roboType);
    const roboCard = document.createElement('figure');
    const roboImg = document.createElement('img');
    roboImg.src = robot.src;
    roboImg.alt = `A cool ${dino} robot!`;
    const roboLabel = document.createElement('figcaption');
    roboLabel.append(document.createTextNode(dino));
    roboCard.append(roboImg);
    roboCard.append(roboLabel);
    controller.showRobos.prepend(roboCard);
});