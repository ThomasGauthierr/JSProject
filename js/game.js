window.onload = init;

let pixelPos = true;

let canvas;

function init() {
    canvas = document.querySelector("#myCanvas");

    if (!pixelPos) {
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas, false);
    } else {
        canvas.width = "500";
        canvas.height = "500";
    }
    //Ecouteurs de clavier
    window.onkeydown = keyDown;
    window.onkeyup = keyUp;


}

function resizeCanvas() {
    let canvas = document.querySelector('#myCanvas');

    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
}