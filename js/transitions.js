let bricksBackground = new Image();
bricksBackground.src = "res/bricks.png";

function drawTransition() {
    ctx.save();

    drawBackGround();

    ctx.restore();
}