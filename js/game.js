
let players = [];
let bubbles = [];

let timer;

let currentLevel = 1;

function initGame() {
   // Keyboard listeners
    window.onkeydown = keyDown;
    window.onkeyup = keyUp;

    // Player creation
    // Constructor takes number of hooks (1 by default),
    // then optionnaly the initial x coord
    // a body color and the hook color
    players.push(new Player(2, canvas.width/2 + 80));
    players.push(new Player(2, canvas.width/2 - 80, 'red', 'orange'));

    // Bubble creation
    bub1 = new Bubble(0,0,2);
    bubbles.push(bub1);

    //Displaying canvas
    canvas.style.visibility = "visible";
    canvasTimer.style.visibility = "visible";

    //Timer
    chronoStart();
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

    // Draw timer
    drawTimer();

    // Animation loop
    requestAnimationFrame(animation);
}

function drawAndMoveObjects() {
    // Drawing and moving bubbles
    bubbles.forEach((bub) => {
        if (bub.life > 0){
            bub.draw();
            bub.move();
        }
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

    drawInGameTexts(ctx, 0);
    drawInGameTexts(ctx, 1);
}

function checkCollisions(){
    // check with sides
    wallsBubbleCollisionTest();
 
    // check between elements
    harponBubbleCollisionTest();
    playerBubbleCollisionTest();
    // no collisions btween bubbles
}