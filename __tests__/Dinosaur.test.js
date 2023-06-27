import getDinos from '../src/js/bs/Dinosaur';

describe("Dinosaur", () => {
    test("Should return five dinosaur names", () => {
        const dinos = getDinos();
        expect(dinos.length).toBe(5);
    })
})