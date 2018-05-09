let players;
let playersALive;
let bubbles;
let ceiling;
let obstacles;
let gravity;
var wait;

let timer;

let currentLevel = 1;

function initGame1Player() {
    state = "game";

    players = [];
    ceiling = new Ceiling();
    // Keyboard listeners
    window.onkeydown = keyDown;
    window.onkeyup = keyUp;

    // Player creation
    // Constructor takes number of hooks (1 by default),
    // then optionnaly the initial x coord
    // a body color and the hook color
    players.push(new Player(2, canvas.width / 2));

    //Initiating level
    level1();

    //Displaying canvas
    canvasTimer.style.visibility = "visible";

    requestAnimationFrame(gameAnimation);
}

function initGame2Players() {
    state = "game";
    players = [];
    ceiling = new Ceiling();

    // Keyboard listeners
    window.onkeydown = keyDown;
    window.onkeyup = keyUp;

    // Player creation
    // Constructor takes number of hooks (1 by default),
    // then optionnaly the initial x coord
    // a body color and the hook color
    players.push(new Player(2, canvas.width / 2 - 80));
    players.push(new Player(2, canvas.width / 2 + 80, 'red', 'orange'));

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
    canvas.width = 800;
    cnvas.width = 400;
    /*
        canvas.width = window.innerWidth * 0.95;
        canvas.height = window.innerHeight * 0.95;
    */
}

function gameAnimation() {
    // Clearing the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxTimer.clearRect(0, 0, canvasTimer.width, canvasTimer.height);

    // check bubblecount
    if (bubbles.length <= 0) {
        winGame();
    }

    if (playersAlive <= 0){
        loseGame();
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
    // other decor elements
    decor.forEach(element => {
        element.draw(ctx);
    });

    // ceiling 
    ceiling.draw(ctx);
    ceiling.move();

    // Drawing and moving bubbles
    bubbles.forEach((bub) => {
        if (bub.life > 0) {
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

    drawTransitionText();
    drawHighScore(ctx);
}

function checkCollisions() {
    // check with sides
    wallsBubbleCollisionTest();
    wallsPLayersCollisionTest();

    // check between elements
    harponBubbleCollisionTest();
    playerBubbleCollisionTest();

    bubbleCeilingCollision(ceiling);
    ceilingPlayerCollision(ceiling);
}

function loseGame(remainingTime) {
    if (numberOfPlayers == 1) {
        if (players[0].lives == 0) {
            endGame();
        } else {
            let message = "Remaining lives : " + players[0].lives + "\n" +
                "Ready ?";
            setTimeout(alert(message), 5000);
            resetLevel();
        }
    } else {
        if (players[0].lives == 0 && players[1].lives == 0) {
            endGame();
        } else if ((!players[0].dead && players[1].dead) || (players[0].dead && !players[1].dead)) {
            //Do nothing if one of them is still alive
            if (remainingTime == 0) {
                let message = "Remaining lives player 1 : " + players[0].lives + "\n" +
                    "Remaining lives player 2 : " + players[1].lives + "\n" +
                    "Ready ?";
                alert(message);
                resetLevel();
            }
        } else {
            let message = "Remaining lives player 1 : " + players[0].lives + "\n" +
                "Remaining lives player 2 : " + players[1].lives + "\n" +
                "Ready ?";
            alert(message);
            resetLevel();
        }
    }
}

function endGame() {
    chronoStop();
    let message = "End of the game\n";
    message += "Score player 1 : " + players[0].score;

    if (numberOfPlayers == 2) {
        message += "\nScore player 2 : " + players[1].score;
    }

    if (numberOfPlayers == 1) {
        if (players[0].score > highscore1P) {
            highscore1P = players[0].score;
            document.cookie = "highscore1P=" + highscore1P + ";expires=Tue, 01 Jan 2019 00:00:01 GMT";
            message += "\nYou just set highscore !";
        }
    } else {
        if (players[0].score > highscore2P &&
            players[0].score > players[1].score) {
            highscore2P = players[0].score;
            document.cookie = "highscore2P=" + highscore2P + ";expires=Tue, 01 Jan 2019 00:00:01 GMT";
            message += "\nPlayer 1 just set a new highscore !";
        }

        if (players[1].score > highscore2P &&
            players[1].score > players[0].score) {
            highscore2P = players[1].score;
            document.cookie = "highscore2P=" + highscore2P + ";expires=Tue, 01 Jan 2019 00:00:01 GMT";
            message += "\nPlayer 2 just set a new highscore !";
        }

    }

    alert(message)

    canvasTimer.style.visibility = "hidden";
    state = "mainMenu";
    currentLevel = 1;

    requestAnimationFrame(mainMenuAnimation);
}

function winGame() {
    chronoStop();
    // transition

    nextLevel();

}

function resetLevel() {

    //Repositionning players
    if (numberOfPlayers == 1) {
        players[0].x = canvas.width / 2;
        players[0].dead = false;
    } else {
        console.log(players[0].lives != 0);
        players[0].x = canvas.width / 2 - 80;
        players[1].x = canvas.width / 2 + 80;
        players[0].dead = (players[0].lives == 0);
        players[1].dead = (players[1].lives == 0);
    }
    players.forEach(p => {
        p.hooks.forEach(hook => {
            hook.remove();
        });

    });

    //Reinitialisating bubbles
    switch (currentLevel) {
        case (1):
            level1();
            break;
        case (2):
            level2();
            break;
        case (3):
            level3();
            break;
        default:
            endGame();
    }
}

function nextLevel() {
    //ToDo : add points related to remaining points
    currentLevel++;

    if (currentLevel <= maxLevel) {
        let message = "Ready ?";
        alert(message);
    }

    resetLevel();
}