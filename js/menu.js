// This has to be set to false if the sizes works by percentage
// WARNING : Not working atm, let it to true :o)
let pixelPos = true;

let canvas, canvasTimer, canvasBottom;

window.onload = init;

let posXButton1P = 150;
let posYButton1P = 170;
let widthButton1P = 200;
let heighthButton1P = 50;
let posXButton2P = posXButton1P;
let posYButton2P = 270;
let widthButton2P = widthButton1P;
let heighthButton2P = heighthButton1P

let numberOfPlayers = 0;

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");

    canvasTimer = document.querySelector("#canvasTimer");

    // Resizing canvas according to the window size
    if (!pixelPos) {
        resizeCanvas();

        window.addEventListener('resize', resizeCanvas, false);
    } else {
        canvas.width = "500";
        canvas.height = "500";

        canvasTimer.width = canvas.width;
        canvasTimer.height = "25";
    }
    canvasBottom = canvas.getBoundingClientRect().bottom;

    window.onkeydown = null;
    window.onkeyup = null;
    
    window.onmousedown = mouseMenu;

    mainMenu();

    //initGame();
}

function mainMenu() {  
    
    ctx.save();
    
    ctx.fillStyle = 'black';
    ctx.fillRect(posXButton1P - 3, posYButton1P - 3, widthButton1P + 6, heighthButton1P + 6);
    
    ctx.fillStyle = 'orange';
    ctx.fillRect(posXButton1P, posYButton1P, widthButton1P, heighthButton1P);
    
    ctx.fillStyle = 'black';
    ctx.font = "20pt Calibri bold";

    ctx.fillText("1 player", posXButton1P + 55, posYButton1P + 32);

    ctx.fillStyle = 'black';
    ctx.fillRect(posXButton2P - 3, posYButton2P - 3, widthButton2P + 6, heighthButton2P + 6);
    
    ctx.fillStyle = 'orange';
    ctx.fillRect(posXButton2P, posYButton2P, widthButton2P, heighthButton2P);
    
    ctx.fillStyle = 'black';
    ctx.font = "20pt Calibri bold";

    ctx.fillText("2 players", posXButton2P + 55, posYButton2P + 32);
    
    ctx.restore();

    canvas.style.visibility = "visible";
    canvasTimer.style.visibility = "hidden";
}