import { getData, getError, getDinos } from '../src/js/bs/Dinosaur';

describe("getData", () => { 
    test("Should return array of 5 strings", () => {
        const response = [['a', 'b', 'c', 'd', 'e']];
        const data = getData(response);
        expect(data).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
})

describe("getError", () => {
    test("Should return error status and error status text", () => {
        const response = {
            status: 404,
            statusText: 'Not Found'
        };
        const error = getError(response);
        expect(error.status).toBe(404);
        expect(error.statusText).toBe('Not Found');
    })
})

// describe("getDinos", () => {
//     test("Should return five dinosaur names", () => {
//         const dinos = getDinos();
//         expect(dinos.length).toBe(5);
//     })
// })