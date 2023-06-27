
/**
 * Get five dinosaur names from Dino Ipsum
 * @returns {String[]} names of dinosaurs
 */
export function getDinos() { 
    // const promise = new Promise((resolve, reject) => {
    //     const request = new XMLHttpRequest();
    //     const url = `https://dinoipsum.com/api/?format=json&paragraphs=1&words=5`;
    //     request.addEventListener("loadend", function(){
    //         const response = JSON.parse(this.responseText);
    //         if (this.status === 200)
    //             resolve(response);
    //     });
    //     request.open("GET", url, true);
    //     request.send();
    // });
}

export function getData(response) {
    const data = response[0];
    return data;
}

export function getError(response) {
    

}

/*
https://dinoipsum.com/api/?format=json
https://dinoipsum.com/api/?format=text&paragraphs=3
https://dinoipsum.com/api/?format=html&paragraphs=3&words=15
*/