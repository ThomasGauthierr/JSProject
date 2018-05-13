let heartImage = new Image();
heartImage.src = "assets/heart.png";

let emptyHeart = new Image();
emptyHeart.src = "assets/empty_heart.png";

let hookImage = new Image();
hookImage.src = "assets/hook.png";

function drawInGameTexts(ctx, playerIndex) {
    drawName(ctx, playerIndex);
    drawScore(ctx, playerIndex);
    drawLives(ctx, playerIndex);
    drawHooks(ctx, playerIndex);
}

function drawName(ctx, playerIndex) {
    ctx.save();
    ctx.font = '12pt "Press Start 2P"';
    ctx.fillStyle = 'white';

    let posX, posY = 25;

    if (playerIndex == 0) {
        posX = 10;
    } else {
        posX = 790;
    }

    ctx.fillText("Player " + (playerIndex + 1), posX, posY);
    ctx.restore();
}

function drawScore(ctx, playerIndex) {
    ctx.save();
    ctx.font = '12pt "Press Start 2P"';
    ctx.fillStyle = 'white';

    let posX, posY = 45;

    if (playerIndex == 0) {
        posX = 10;
    } else {
        posX = 790;
    }

    ctx.fillText("score : " + players[playerIndex].score, posX, posY);
    ctx.restore();
}

function drawLives(ctx, playerIndex) {
    ctx.save();

    let img = new Image();
    let posX;
    let posY = 44;
    let heartHeight = 30;
    let heartWidth = heartHeight;

    if (playerIndex == 0) {
        posX = 10;
    } else {
        posX = 790;
    }

    for (let i = 1; i <= 5; i++) {
        if (players[playerIndex].lives >= i) {
            img = heartImage;
        } else {
            img = emptyHeart;
        }

        ctx.drawImage(img, posX, posY, heartHeight, heartWidth);
        posX += 35;
    }
    ctx.restore();

}

function drawHighScore(ctx) {
    ctx.save();
    ctx.font = '14pt "Press Start 2P"';
    ctx.fillStyle = 'white';
    let posX = canvas.width / 2 - 140;
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

function drawHooks(cyx, playerIndex) {
    let posX, posY;

    if (playerIndex == 0) {
        posX = 10;
    } else {
        posX = 790;
    }

    posY = 80;

    players[playerIndex].hooks.forEach(hook => {
        if (!hook.isShot) {
            ctx.drawImage(hookImage, posX, posY, 90, 15);
            posY += 10;
        }
    });
}