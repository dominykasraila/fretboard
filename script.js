import frets from "./frets.js";

const rectSide = 20;

const canvas = document.getElementById('fretboardCanvas');
const ctx = canvas.getContext("2d");


canvas.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    highlightRandom();
});

function highlightRandom() {
    const fretFrom = document.getElementById('fretFrom');
    const fretTo = document.getElementById('fretTo');
    const stringFrom = document.getElementById('stringFrom');
    const stringTo = document.getElementById('stringTo');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let string = randomInteger(
        parseInt(stringFrom.value), 
        parseInt(stringTo.value)
    );

    let fret = randomInteger(
        parseInt(fretFrom.value),
        parseInt(fretTo.value)
    );

    highlight(string, fret);
}

function hightlightAll() {
    for (let f of frets) {
        highlight(f.string, f.fret);
    }
}

function highlight(string, fret) {
    let c = frets.find(f => f.string == string && f.fret == fret);
    ctx.fillStyle = "red";
    ctx.fillRect(c.x - (rectSide / 2), c.y - (rectSide / 2), rectSide, rectSide);
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let string = 1;
// let fret = 0;
// let newFrets = new Array();

// function logFret(x, y) {
//     let log = {string: string, fret: fret, x: x, y: y};
//     console.log(log);
//     newFrets.push(log);
//     if (fret == 20) {
//         string += 1;
//         fret = 0;
//     } else {
//         fret += 1;
//     }
    
// }

// canvas.addEventListener("click", function (e) {
//     logFret(e.offsetX, e.offsetY);
//     console.log()
// });

