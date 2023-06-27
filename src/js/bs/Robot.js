/* Turn a dinosaur from dino ipsum into a robot from robohash*/
export default class Robot {
    constructor(dino, set = '') {
        this.dino = dino;
        this.src = `https://robohash.org/${this.dino}${set ? '?set=set' + set : ''}`;
    }
}