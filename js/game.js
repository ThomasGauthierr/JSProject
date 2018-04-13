let players;
let bubbles;

let timer;

let currentLevel = 1;

function initGame1Player() {
    state = "game";

    players = [];
    bubbles = [];

    // Keyboard listeners
     window.onkeydown = keyDown;
     window.onkeyup = keyUp;
 
     // Player creation
     // Constructor takes number of hooks (1 by default),
     // then optionnaly the initial x coord
     // a body color and the hook color
     players.push(new Player(2, canvas.width/2));
 
     // Bubble creation
     bub1 = new Bubble(0,0,2);
     bubbles.push(bub1);
 
     //Displaying canvas
     canvasTimer.style.visibility = "visible";
 
     //Timer
     chronoStart();
     requestAnimationFrame(gameAnimation);
 }

 function initGame2Players() {
     state = "game";
    players = [];
    bubbles = [];

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
     canvasTimer.style.visibility = "visible";
 
     //Timer
     chronoStart();
     requestAnimationFrame(gameAnimation);
 }

function resizeCanvas() {
    let canvas = document.querySelector('#myCanvas');

    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
}

function gameAnimation() {
    // Clearing the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxTimer.clearRect(0, 0, canvasTimer.width, canvasTimer.height);

    //Drawing and moving the objects
    drawAndMoveObjects();
    
    // checking collisions
    checkCollisions();

    // Draw timer
    drawTimer();

    // Animation loop
    if (state == "game") {
        requestAnimationFrame(gameAnimation);
    }
}

function drawAndMoveObjects() {
    // Drawing and moving bubbles
    bubbles.forEach((bub) => {
        if (bub.life > 0){
            bub.move();
            bub.draw();
        }
    });

    // Drawing and moving the players
    let i = 0;
    players.forEach(player => {
        // Drawing and moving hooks
        player.hooks.forEach(hook => {
            hook.draw(ctx);
            hook.grow();
        });
        player.draw(ctx);
        player.move();
        drawInGameTexts(ctx, i);
        i++;
    });
}

function checkCollisions(){
    // check with sides
    wallsBubbleCollisionTest();
 
    // check between elements
    harponBubbleCollisionTest();
    playerBubbleCollisionTest();
    // no collisions between bubbles
}

function endGame() {
    chronoStop();
    let message = "End of the game\n";
    message += "Score player 1 : " + players[0].score;
    
    if (numberOfPlayers == 2) {
        message += "\nScore player 2 : " + players[1].score;
    }

    alert(message)

    canvasTimer.style.visibility = "hidden";
    state = "mainMenu";
}