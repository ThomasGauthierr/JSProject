window.onload = init;

let pixelPos = true;

let canvas, canvasBottom;
let player;
let bubbles = [];

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");

    if (!pixelPos) {
        resizeCanvas();

        window.addEventListener('resize', resizeCanvas, false);
    } else {
        canvas.width = "500";
        canvas.height = "500";
    }

    canvasBottom = canvas.getBoundingClientRect().bottom;

    //Ecouteurs de clavier
    window.onkeydown = keyDown;
    window.onkeyup = keyUp;

    player = new Player();

    //creation bubble
    bub1 = new Bubble(0,0,2);
    bubbles.push(bub1);

    requestAnimationFrame(animation);

}

function resizeCanvas() {
    let canvas = document.querySelector('#myCanvas');

    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
}

function animation() {
     // 1 on efface
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 2 on dessine et on deplace
  drawAndMoveObjects();
  
  // 4 on rappelle la boucle d'animation 60 fois / s
  requestAnimationFrame(animation);
}

function drawAndMoveObjects() {
    bubbles.forEach((bub) => {
        bub.draw();
        bub.move();
    })
    player.draw(ctx);
    player.move();

    player.hooks.forEach(hook => {
        hook.draw(ctx);
        hook.grow();
    });
}