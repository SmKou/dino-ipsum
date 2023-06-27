const XMLHttpRequest = require('xhr2');

/**
 * Get five dinosaur names from Dino Ipsum
 * @returns {String[]} names of dinosaurs
 */
export function getDinos() {
    const promise = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        const url = `https://dinoipsum.com/api/?format=json&paragraphs=1&words=5`;
        request.addEventListener("loadend", function () {
            const response = JSON.parse(this.responseText);
            if (this.status === 200)
                resolve(response);
            else
                reject(this);
        });
        request.open("GET", url, true);
        request.send();
    });
    return promise.then(getData, getError);
}

export function getData(response) {
    const data = response[0];
    return data;
}

export function getError(response) {
    const error = `There was an error accessing the dino ipsum data: ${response.status} ${response.statusText}`;
    return error;
}


