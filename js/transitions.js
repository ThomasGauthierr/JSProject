let bricksBackground = new Image();
bricksBackground.src = "assets/bricks.png";

function drawTransition(newHighScore) {
    
    canvasTimer.style.visibility = "hidden";

    ctx.save();

    drawBackGround();
    ctx.save();

    let title, instructions1, instructions2, instructions3;
    let instructions1posX, instructions2posX, instructions3posX;
    let addedScoreString, addedScorePosX, addedScorePosY;
    let posXTitle, posYTitle;

    ctx.font = '80px "Press Start 2P"';
    ctx.fillStyle = "white";
    
    posYTitle = 200;

    if (addedScore > 0) {
        players.forEach(player => {
            if (player.dead == false) player.score += addedScore;
        });
        addedScoreString = "Living players won " + addedScore + " points";
    } else {
        addedScoreString = "";
    }
    addedScorePosX = 150;
    addedScorePosY = 300;

    if (state == STATE_TRANSITION_WIN) {
        title = "  Success !";
        posXTitle = 20;
        instructions1 = "Next level : " + currentLevel;
        instructions1posX = 350;
        instructions2 = "Press enter when ready";
        instructions2posX = 250;
    } else if (state == STATE_TRANSITION_LOSE) {
        ctx.fillStyle = 'red';
        title = "  You died  ";
        posXTitle = 20;
        ctx.fillstyle = 'white';
        instructions1 = "Press enter to restart";
        instructions1posX = 230;
        instructions2 = "Press M to stop";
        instructions2posX = 285;
    } else {
        title = "Game over";
        posXTitle = 140;
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
            instructions2posX = 300;

            if (newHighScore == 1) {                
                instructions1 += " (new highscore)";
                instructions1posX = 120;
            }

            if (newHighScore == 2) {                
                instructions2 += " (new highscore)";
                instructions2posX = 120;
            }

            instructions3 = "Press enter to leave";
            instructions3posX = 240;
        }
    }
    ctx.fillText(title, posXTitle, posYTitle);


    ctx.font = '25px "Press Start 2P"';
    ctx.fillStyle = "white";

    ctx.fillText(addedScoreString, addedScorePosX, addedScorePosY);

    let posYInstructions = 380;
    ctx.fillText(instructions1, instructions1posX, posYInstructions);
    posYInstructions += 80;

    if (instructions2 != undefined) {
        ctx.fillText(instructions2, instructions2posX, posYInstructions);
        posYInstructions += 100;
    }

    if (instructions3 != undefined) {
        ctx.fillText(instructions3, instructions3posX, posYInstructions);
    }

    ctx.restore();
}