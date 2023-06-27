import Robot from "../src/js/bs/Robot";

describe("Robot", () => {
    test("Should turn a dino word into a robot url", () => {
        const dino = 'elosaurus';
        const robot = new Robot(dino);
        expect(dino.src).toBe('https://robohash.org/elosaurus');
        expect(robot.dino).toBe("elosaurus");
    });
})