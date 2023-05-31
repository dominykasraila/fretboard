const rectSide = 25;

const frets = [
    {string: 1, fret: 2, x: 200, y: 295},
    {string: 1, fret: 3, x: 295, y: 295},
    {string: 1, fret: 4, x: 385, y: 293},
];

let canvas = document.getElementById('fretboardCanvas');
let context = canvas.getContext("2d");

let image = new Image();
image.src = "fretboard.jpg";

new Promise(resolve => {
    image.onload = resolve
}).then(() => {
    context.drawImage(image, 0, 0, 1327, 670);

    context.fillStyle = "red";

    for (let f of frets) {
        highlight(f.string, f.fret);
    }
});

function highlight(string, fret) {
    let c = frets.find(f => f.string == string && f.fret == fret);

    context.fillRect(c.x - (rectSide/2), c.y - (rectSide/2), rectSide, rectSide);
}