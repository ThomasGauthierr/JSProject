let bricksBackground = new Image();
bricksBackground.src = "res/bricks.png";

function drawTransition(newHighScore) {
    
    canvasTimer.style.visibility = "hidden";

    ctx.save();

    drawBackGround();

    let title, instructions1, instructions2, instructions3;
    let instructions1posX, instructions2posX, instructions3posX;

    ctx.font = "150px sans-serif";
    ctx.fillStyle = "lightgrey";
    let posX = 110;
    let posY = 250;

    if (state == STATE_TRANSITION_WIN) {
        title = "  Success !";
        instructions1 = "Next level : " + currentLevel;
        instructions1posX = 380;
        instructions2 = "Press enter when ready";
        instructions2posX = 250;
    } else if (state == STATE_TRANSITION_LOSE) {
        title = "  Failure !";
        instructions1 = "Press enter to restart";
        instructions1posX = 230;
        instructions2 = "Press M to stop";
        instructions2posX = 285;
    } else {
        title = "Game over";
        if (numberOfPlayers == 1) {
            instructions1 = "Score P1 : " + players[0].score;
            instructions1posX = 300;
            if (newHighScore != undefined) {
                instructions1 += " (new highscore)";
                instructions1posX = 120;
            }
            instructions2 = "Press enter to leave";
            instructions2posX = 260;
        } else {    
            instructions1 = "Score P1 : " + players[0].score;
            instructions1posX = 300;
            instructions2 = "Score P2 : " + players[1].score;
            instructions2posX = 260;

            if (newHighScore == 1) {                
                instructions1 += " (new highscore)";
                instructions1posX = 120;
            }

            if (newHighScore == 2) {                
                instructions2 += " (new highscore)";
                instructions2posX = 120;
            }

            instructions3 = "Press enter to leave";
            instructions3posX = 260;
        }
    }
    ctx.fillText(title, posX, posY);

    
    ctx.font = "50px sans-serif";
    ctx.fillStyle = "white";
    posY = 350;
    ctx.fillText(instructions1, instructions1posX, posY);
    posY += 70;

    if (instructions2 != undefined) {
        ctx.fillText(instructions2, instructions2posX, posY);
        posY += 100;
    }

    if (instructions3 != undefined) {
        ctx.fillText(instructions3, instructions3posX, posY);
    }

    ctx.restore();
}