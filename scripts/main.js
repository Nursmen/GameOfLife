var canvas = document.getElementById('gol');
var ctx = canvas.getContext('2d');
const GRID = findGetParameter('grid') ?? 15;

const WIDTH = 500;
const HEIGHT = 500;
const SIZE = WIDTH / GRID;
const COLOR1 = '#D82148';
const COLOR0 = '#6EBF8B';
const COLOR3 = '#141E27';

var isFirst = true;
var isDraw = false;



c = start();
draw(c);

let buutton = document.getElementById('button');
buutton.onclick = function () {
    isFirst = false;
    c = draw(c);
    buutton.innerText = 'Click to next step';
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        c = draw(c);
        isFirst = false;
        buutton.innerText = 'Click to next step';
    }
});

let reset = document.getElementById('reset');
reset.onclick = function () {
    isFirst = true;
    c = start();
    draw(c);
    buutton.innerText = 'Click to start';
}