//ToDo : 2 players mode ?

window.onload = init;

// This has to be set to false if the sizes works by percentage
// WARNING : Not working atm, let it to true :o)
let pixelPos = true;

let canvas, canvasBottom;
let player;
let bubbles = [];

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");

    // Resizing canvas according to the window size
    if (!pixelPos) {
        resizeCanvas();

        window.addEventListener('resize', resizeCanvas, false);
    } else {
        canvas.width = "500";
        canvas.height = "500";
    }
    canvasBottom = canvas.getBoundingClientRect().bottom;
    // Keyboard listeners
    window.onkeydown = keyDown;
    window.onkeyup = keyUp;

    // Player creation
    player = new Player();

    // Bubble creation
    bub1 = new Bubble(0,0,2);
    bubbles.push(bub1);

    requestAnimationFrame(animation);
}

function resizeCanvas() {
    let canvas = document.querySelector('#myCanvas');

    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
}

function animation() {
    // Clearing the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    //Drawing and moving the objects
    drawAndMoveObjects();
  
    // Animation loop
    requestAnimationFrame(animation);
}

function drawAndMoveObjects() {
    // Drawing and moving bubbles
    bubbles.forEach((bub) => {
        bub.draw();
        bub.move();
    });

    // Drawing and moving the player
    player.draw(ctx);
    player.move();

    // Drawing and moving hooks
    player.hooks.forEach(hook => {
        hook.draw(ctx);
        hook.grow();
    });
}