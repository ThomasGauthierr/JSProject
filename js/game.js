let players;
let bubbles;
let ceiling;
let obstacles;
let gravity;
var wait;

let timer;

let currentLevel;

function initGame1Player() {
    currentLevel = 1;
    state = STATE_GAME;
    playSound(inGameMusic);

    players = [];
    ceiling = new Ceiling();
    // Keyboard listeners
    window.onkeydown = keyDown;
    window.onkeyup = keyUp;

    // Player creation
    // Constructor takes number of hooks (1 by default),
    // then optionnaly the initial x coord
    // a body color and the hook color
    players.push(new Player(1, 2, canvas.width / 2, '#7572ff'));

    //Initiating level
    level1();

    //Displaying canvas
    canvasTimer.style.visibility = "visible";

    requestAnimationFrame(gameAnimation);
}

function initGame2Players() {
    currentLevel = 1;
    state = STATE_GAME;
    playSound(inGameMusic);

    players = [];
    ceiling = new Ceiling();

    // Keyboard listeners
    window.onkeydown = keyDown;
    window.onkeyup = keyUp;

    // Player creation
    // Constructor takes player number, number of hooks (1 by default),
    // then optionnaly the initial x coord
    // a body color and the hook color
    players.push(new Player(1, 2, canvas.width / 2 - 80, '#7572ff'));
    players.push(new Player(2, 2, canvas.width / 2 + 80, 'orange'));

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
    if (state == STATE_GAME) {
        // Clearing the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctxTimer.clearRect(0, 0, canvasTimer.width, canvasTimer.height);
        
        // check bubblecount
        if (bubbles.length <= 0) {
            winGame();
            return;
        }

        //Drawing background
        drawBackGround();

        //Drawing and moving the objects
        drawAndMoveObjects();

        // checking collisions
        checkCollisions();

        // Draw timer
        drawTimer();

        // Animation loop
        requestAnimationFrame(gameAnimation);
    }
}

function drawAndMoveObjects() {
    // other decor elements
    decor.forEach(element => {
        element.draw(ctx);
    });

    // ceiling
    if (ceiling.height >= 1){
        ceiling.draw(ctx);
        ceiling.move();
    }

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
            playSound(gameOverSound);
            endGame();
        } else {
            let message = "Remaining lives : " + players[0].lives + "\n" +
                "Ready ?";
            state = STATE_TRANSITION_LOSE;
            drawTransition();
            //setTimeout(alert(message), 5000);
            //resetLevel();
        }
    } else {
        if (players[0].lives == 0 && players[1].lives == 0) {
            playSound(gameOverSound);
            endGame();
        } else if ((!players[0].dead && players[1].dead) || (players[0].dead && !players[1].dead)) {
            //Do nothing if one of them is still alive
            if (remainingTime == 0) {
                /*
                let message = "Remaining lives player 1 : " + players[0].lives + "\n" +
                    "Remaining lives player 2 : " + players[1].lives + "\n" +
                    "Ready ?";
                alert(message);
                resetLevel();
                */
                state = STATE_TRANSITION_LOSE;
                drawTransition();
            }
        } else {
            /*
            let message = "Remaining lives player 1 : " + players[0].lives + "\n" +
                "Remaining lives player 2 : " + players[1].lives + "\n" +
                "Ready ?";
            alert(message);
            resetLevel();
            */
           
           state = STATE_TRANSITION_LOSE;
           drawTransition();
        }
    }
}

function endGame() {
    stopSound(inGameMusic);
    chronoStop();

    //alert(message)

    canvasTimer.style.visibility = "hidden";
    //state = STATE_MAIN_MENU;

    state = STATE_TRANSITION_OVER;
    if (currentLevel > maxLevel) {
        drawTransition(checkHighScore(currentLevel > maxLevel));
    } else {
        if (numberOfPlayers == 1) {
            drawTransition(checkHighScore(players[0].lives == 0));
        } else {
            drawTransition(checkHighScore(players[0].lives == 0 && players[1].lives == 0));
        }
    }

    currentLevel = 1;

    //requestAnimationFrame(mainMenuAnimation);
}

function winGame() {

    currentLevel++;

    if (currentLevel > maxLevel) {
        stopSound(inGameMusic);
        state = STATE_TRANSITION_OVER;
        drawTransition(checkHighScore(currentLevel > maxLevel));
    } else {        
        state = STATE_TRANSITION_WIN;
        drawTransition();
    }

}

function resetLevel() {
    chronoStop();

    //Repositionning players
    if (numberOfPlayers == 1) {
        players[0].x = canvas.width / 2;
        players[0].dead = false;
    } else {
        players[0].x = canvas.width / 2 - 80;
        players[1].x = canvas.width / 2 + 80;
        players[0].dead = (players[0].lives == 0);
        players[1].dead = (players[1].lives == 0);
    }
    players.forEach(p => {
        p.reinitHooks();
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
            //endGame();
            state = STATE_TRANSITION_OVER;
            drawTransition();
    }

    canvasTimer.style.visibility = "visible";

    requestAnimationFrame(gameAnimation);
}

function nextLevel() {
    //ToDo : add points related to remaining points
    currentLevel++;

    resetLevel();
}

function checkHighScore(final) {
    let highscorePlayer;

    //ToDo : final sert juste à savoir si on a fini le jeu, à voir si c'est vraiment utile (si on le met pas le highscore sera actualisé à la fin de chaque niveau ou à chaque mort)
    if (final == true) {

        if (numberOfPlayers == 1) {
            if (players[0].score > highscore1P) {
                highscore1P = players[0].score;
                document.cookie = "highscore1P=" + highscore1P + ";expires=Tue, 01 Jan 2019 00:00:01 GMT";
                highscorePlayer = 1;
            }
        } else {
            if (players[0].score > highscore2P &&
                players[0].score > players[1].score) {
                highscore2P = players[0].score;
                document.cookie = "highscore2P=" + highscore2P + ";expires=Tue, 01 Jan 2019 00:00:01 GMT";
                highscorePlayer = 1;
            }

            if (players[1].score > highscore2P &&
                players[1].score > players[0].score) {
                highscore2P = players[1].score;
                document.cookie = "highscore2P=" + highscore2P + ";expires=Tue, 01 Jan 2019 00:00:01 GMT";
                highscorePlayer = 2;
            }
        }

    }
    return highscorePlayer;
}