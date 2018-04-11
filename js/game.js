window.onload = init;

// This has to be set to false if the sizes works by percentage
// WARNING : Not working atm, let it to true :o)
let pixelPos = true;

let canvas, canvasBottom;
let players = [];
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
    // Constructor takes number of hooks (1 by default),
    // then optionnaly the initial x coord
    // and a body color (black by default)
    players.push(new Player(2, canvas.width/2 + 80));
    players.push(new Player(2, canvas.width/2 - 80, 'red'));

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
    
     // checking collisions
    checkCollisions();

    // Animation loop
    requestAnimationFrame(animation);
}

function drawAndMoveObjects() {
    // Drawing and moving bubbles
    bubbles.forEach((bub) => {
        bub.draw();
        bub.move();
    });

    // Drawing and moving the players
    players.forEach(player => {
        // Drawing and moving hooks
        player.hooks.forEach(hook => {
            hook.draw(ctx);
            hook.grow();
        });

        player.draw(ctx);
        player.move();
    });
}

function checkCollisions(){
    // check with sides
    wallsBubbleCollisionTest();
 
    // check between elements
    // no collisions btween bubbles
}

function wallsBubbleCollisionTest(){
    bubbles.forEach(element => {
            if (element.x - element.r <= 0){
                element.x = element.r;
                element.vitesseX = - element.vitesseX;
            } else if (element.x + element.r >= canvas.width ){
                element.x = canvas.width - element.r;
                element.vitesseX = - element.vitesseX;
            }
            if (element.y <= element.r){
                element.y = element.r;
                element.vitesseY = - element.vitesseY;
            } else if (element.y >= canvas.height - element.r){
                element.y = canvas.height - element.r;
                element.vitesseY = - element.vitesseY;
            }
    });
}