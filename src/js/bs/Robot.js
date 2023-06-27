/* Turn a dinosaur from dino ipsum into a robot from robohash
 ${set ? '?set=set' + set : ''}*/
export default class Robot {
    constructor(dino, set = '') {
        this.dino = dino;
        this.src = `https://robohash.org/${this.dino}`;
    }
}