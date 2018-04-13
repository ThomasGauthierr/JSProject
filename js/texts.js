function drawInGameTexts(ctx, playerIndex) {
    drawName(ctx, playerIndex);
    drawScore(ctx, playerIndex);
    drawLives(ctx, playerIndex);
}

function drawName(ctx, playerIndex) {
    ctx.save();
    ctx.font = "12pt Calibri bold";

    let posX, posY = 15;

    if (playerIndex == 0) {
        posX = 10;
    } else {
        posX = 410;
    }

    ctx.fillText("Player " + (playerIndex + 1), posX, posY);
    ctx.restore();
}

function drawScore(ctx, playerIndex) {
    ctx.save();
    ctx.font = "12pt Calibri";

    let posX, posY = 30;

    if (playerIndex == 0) {
        posX = 10;
    } else {
        posX = 410;
    }

    ctx.fillText("score : " + players[playerIndex].score, posX, posY);
    ctx.restore();
}

function drawLives(ctx, playerIndex) {
    ctx.save();
    ctx.font = "12pt Calibri";
    
    let posX, posY = 44;

    if (playerIndex == 0) {
        posX = 10;
    } else {
        posX = 410;
    }
    
    ctx.fillText("lives : " + players[playerIndex].lives, posX, posY);
    ctx.restore();
}

function drawHighScore(ctx) {
    ctx.save();
    ctx.font = "12pt Calibri";

    let posX = canvas.width/2 - 70;
    let posY = 25;

    let message = "Highscore : ";

    if (numberOfPlayers == 1) {
        message += highscore1P;
    } else {
        message += highscore2P;
    }

    ctx.fillText(message, posX, posY);
    ctx.restore();
}