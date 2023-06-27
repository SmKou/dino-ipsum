import Robot from "../src/js/bs/Robot";

describe("Robot", () => {
    test("Should turn a dino word into a robot url", () => {
        const dino = 'elosaurus';
        const robot = new Robot(dino);
        expect(robot.src).toBe('https://robohash.org/elosaurus');
        expect(robot.dino).toBe("elosaurus");
    });

    test("Should add a set to URL if one is present", () => {
        const set = 2;
        const dino = 'elosaurus';
        const robot = new Robot(dino, set);
        expect(robot.src).toBe('https://robohash.org/elosaurus?set=set2')
    })
})