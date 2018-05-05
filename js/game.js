let players;
let bubbles;
let obstacles;
let gravity;
var wait;

let timer;

let currentLevel = 1;

function initGame1Player() {
    state = "game";

    players = [];

    // Keyboard listeners
     window.onkeydown = keyDown;
     window.onkeyup = keyUp;
 
     // Player creation
     // Constructor takes number of hooks (1 by default),
     // then optionnaly the initial x coord
     // a body color and the hook color
     players.push(new Player(2, canvas.width/2));
 
       //Initiating level
       level1();
 
     //Displaying canvas
     canvasTimer.style.visibility = "visible";
 
     requestAnimationFrame(gameAnimation);
 }

 function initGame2Players() {
    state = "game";
    players = [];

    // Keyboard listeners
     window.onkeydown = keyDown;
     window.onkeyup = keyUp;
 
     // Player creation
     // Constructor takes number of hooks (1 by default),
     // then optionnaly the initial x coord
     // a body color and the hook color
     players.push(new Player(2, canvas.width/2 + 80));
     players.push(new Player(2, canvas.width/2 - 80, 'red', 'orange'));
 
    //Initiating level
    level1();

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

    // check bubblecount
    if (bubbles.length <= 0){
        winGame();
    }

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
        player.move();
        player.draw(ctx);

        drawInGameTexts(ctx, i);
        i++;
    });

    decorElements.forEach(elem => {
        elem.move();
        elem.draw(ctx);
    });
    drawHighScore(ctx);
}

function checkCollisions(){
    // check with sides
    wallsBubbleCollisionTest();
 
    // check between elements
    harponBubbleCollisionTest();
    playerBubbleCollisionTest();
}

function loseGame() {
    chronoStop();
    let message = "End of the game\n";
    message += "Score player 1 : " + players[0].score;
    
    if (numberOfPlayers == 2) {
        message += "\nScore player 2 : " + players[1].score;
    }

    if (numberOfPlayers == 1) {
        if (players[0].score > highscore1P) {
            highscore1P = players[0].score;
            document.cookie = "highscore1P="+highscore1P+";expires=Tue, 01 Jan 2019 00:00:01 GMT";
            message += "\nYou just set highscore !";
        }
    } else {
       if (players[0].score > highscore2P &&
           players[0].score > players[1].score) {
            highscore2P = players[0].score;
            document.cookie = "highscore2P="+highscore2P+";expires=Tue, 01 Jan 2019 00:00:01 GMT";
            message += "\nPlayer 1 just set a new highscore !";
        }
        
       if (players[1].score > highscore2P &&
           players[1].score > players[0].score) {
            highscore2P = players[1].score;
            document.cookie = "highscore2P="+highscore2P+";expires=Tue, 01 Jan 2019 00:00:01 GMT";
            message += "\nPlayer 2 just set a new highscore !";
        }

    }

    alert(message)

    canvasTimer.style.visibility = "hidden";
    state = "mainMenu";
    currentLevel = 1;

    requestAnimationFrame(mainMenuAnimation);
}

function winGame(){
    chronoStop();
    // transition
    let message = "Ready ?";
    
    alert(message);
    nextLevel();
    
}

function resetLevel() {

    //Repositionning players
    if (numberOfPlayers == 1) {
        players[0].x = canvas.width/2;
    } else {
        players[0].x = canvas.width/2 - 80;
        players[1].x = canvas.width/2 + 80;
    }

    //Reinitialisating bubbles
    switch (currentLevel) {
        case (1) :
            level1();
            break;
        case (2) :
            level2();
            break;
        case (3) :
            level3();
            break;
        default :
            loseGame();
    }
}

function nextLevel() {
    //ToDo : add points related to remaining points
    currentLevel ++;
    resetLevel();
}