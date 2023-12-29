const WIDTH = 654;
const HEIGHT = 410;
const SPEED = 20;
const ON = '#00ee00';
const OFF = '#ee0000';
let simdiv = document.getElementById('sim');

let inputID = [
    'rev', 'gra', 'fun', 'aff', 'gen'
];
let inputs = [
    true, false, true, false, false
];
let weights = [
    0.9, 0.3, 0.8, 0.5, 0.6
];
let threshold = .5;

let getInput = (i) => inputs[i] ? ON : OFF;
let getWeight = (i) => weights[i];
function setInput(i) {
    let selector = '#c-' + inputID[i];
    inputs[i] = document.querySelector(selector).checked;
}
function setWeight(i) {
    let selector = '#r-' + inputID[i];
    weights[i] = parseFloat(document.querySelector(selector).value);
}
function setThreshold() {
    threshold = parseFloat(
        document.querySelector('#threshold').value);
}

function startSim() {
    simArea.start();
}

var simArea = {
    canvas : document.createElement('canvas'),
    start : function() {
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.context = this.canvas.getContext('2d');
        simdiv.appendChild(this.canvas);
        this.frameNo = 0;
        this.interval = setInterval(updateSimArea, SPEED);
    },
    clear : function() {
        this.context.clearRect(0, 0, WIDTH, HEIGHT);
    }
}

function updateSimArea() {
    var ctx = simArea.context;

    simArea.clear();
    simArea.frameNo++;

    // weights
    ctx.strokeStyle = '#55aaff';
    for (let i = 0; i < 5; i++) {
        ctx.lineWidth = weights[i] != 0 ? weights[i] * 7 : .1;
        ctx.beginPath();
        ctx.moveTo(25, ((HEIGHT - 50) / 5 * i) + 25);
        ctx.lineTo(WIDTH / 2, HEIGHT / 2 - 30);
        ctx.stroke();
        ctx.closePath();
    }

    // calculate sum
    let selected = 0;
    let total = 0;
    for (let i = 0; i < 5; i++) {
        selected += inputs[i] ? weights[i] : 0;
        total += weights[i];
    }

    // needed line
    ctx.strokeStyle = '#ffaa55';
    ctx.setLineDash([5, 3]);
    ctx.lineWidth = threshold != 0 ? threshold * 20 : .1;
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2, HEIGHT / 2 - 30);
    ctx.lineTo(WIDTH - 25, HEIGHT / 2 - 30);
    ctx.stroke();
    ctx.closePath();

    // output line
    ctx.strokeStyle = '#55aaff';
    ctx.setLineDash([]);
    ctx.lineWidth = selected != 0 ? selected / total * 20 : .1;
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2, HEIGHT / 2 - 30);
    ctx.lineTo(WIDTH - 25, HEIGHT / 2 - 30);
    ctx.stroke();
    ctx.closePath();

    // nodes
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(
            25, ((HEIGHT - 50) / 5 * i) + 25, 10, 0, 2 * Math.PI, false
        );
        ctx.closePath();
        ctx.fillStyle = getInput(i);
        ctx.fill();
        ctx.stroke();
    }

    // output
    ctx.beginPath();
    ctx.arc(
        WIDTH - 25, HEIGHT / 2 - 30, 20, 0, 2 * Math.PI, false
    )
    ctx.stroke();
    ctx.fillStyle = selected >= threshold * total ? ON : OFF;
    ctx.fill();
    ctx.closePath();


    // perceptron
    ctx.lineWidth = 5;
    ctx.fillStyle = '#777777';
    ctx.beginPath();
    ctx.arc(
        WIDTH / 2, HEIGHT / 2 - 30, 50, 0, 2 * Math.PI, false
    )
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

startSim();