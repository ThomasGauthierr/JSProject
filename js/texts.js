function drawInGameTexts(ctx, playerIndex) {
    drawName(ctx, playerIndex);
    drawScore(ctx, playerIndex);
    drawLives(ctx, playerIndex);
}

function drawName(ctx, playerIndex) {
    ctx.save();
    ctx.font = "10pt Calibri bold";

    let posX, posY = 15;

    if (playerIndex == 0) {
        posX = 10;
    } else {
        posX = 400;
    }

    ctx.fillText("Player " + (playerIndex + 1), posX, posY);
    ctx.restore();
}

function drawScore(ctx, playerIndex) {
    ctx.save();
    ctx.font = "10pt Calibri";

    let posX, posY = 30;

    if (playerIndex == 0) {
        posX = 10;
    } else {
        posX = 400;
    }

    ctx.fillText("score : " + players[playerIndex].score, posX, posY);
    ctx.restore();
}

function drawLives(ctx, playerIndex) {
    ctx.save();
    ctx.font = "10pt Calibri";
    
    let posX, posY = 41;

    if (playerIndex == 0) {
        posX = 10;
    } else {
        posX = 400;
    }
    
    ctx.fillText("lives : " + players[playerIndex].lives, posX, posY);
    ctx.restore();
}