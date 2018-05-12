// This has to be set to false if the sizes works by percentage
// WARNING : Not working atm, let it to true :o)
let pixelPos = true;

let canvas, canvasTimer, canvasBottom;
let ctx, ctxTimer;

window.onload = init;

let posXButton1P,posYButton1P,widthButton1P,heighthButton1P,posXButton2P,posYButton2P,widthButton2P, heighthButton2P;

let numberOfPlayers = 0;

let state;

let STATE_MAIN_MENU = 0;
let STATE_GAME = 1;
let STATE_TRANSITION_WIN = 2;
let STATE_TRANSITION_LOSE = 3;
let STATE_TRANSITION_OVER = 4;



let highscore1P;
let highscore2P;

function init() {
    initCookies();

    state = STATE_MAIN_MENU;

    canvas = document.querySelector("#myCanvas");
    canvasTimer = document.querySelector("#canvasTimer");

    ctx = canvas.getContext("2d");
    ctxTimer = canvasTimer.getContext("2d");

    // Resizing canvas according to the window size
    if (!pixelPos) {
        resizeCanvas();
        buttonsPositionning();

        window.addEventListener('resize', resizeCanvas, false);
    } else {
        canvas.width = "1000";
        canvas.height = "600";
        canvasTimer.width = canvas.width;
        canvasTimer.height = "25";
    }

    buttonsPositionning();

    canvasBottom = canvas.getBoundingClientRect().bottom;

    window.onkeydown = null;
    window.onkeyup = null;
    
    window.onmousedown = mouseMenu;

    canvas.style.visibility = "visible";  
    canvasTimer.style.visibility = "hidden";

    requestAnimationFrame(mainMenuAnimation);
}

function drawMainMenu() {
    ctx.save();

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasTimer.width, canvasTimer.height);

    drawBackGround();
    
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
}

function mainMenuAnimation() {

    //Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //Draw menu
    drawMainMenu();

    if (state == STATE_MAIN_MENU) {
        requestAnimationFrame(mainMenuAnimation);
    }
}

function buttonsPositionning(){
    let gap = 100;
    let nbButtons = 2;
    let widthButton = 200;
    let heightButton = 50;

    posXButton1P = canvas.width / 2 - widthButton /2;
    posYButton1P = 170; 
    widthButton1P = widthButton;
    heighthButton1P = heightButton;

    posXButton2P = posXButton1P;
    posYButton2P = posYButton1P + heightButton + gap;
    widthButton2P = widthButton1P;
    heighthButton2P = heighthButton1P;
}

function drawBackGround() {
    //First row
    ctx.drawImage(bricksBackground, 0, 0, canvas.width/4, canvas.height/4)
    ctx.drawImage(bricksBackground, 0, canvas.height/4, canvas.width/4, canvas.height/4) 
    ctx.drawImage(bricksBackground, 0, canvas.height/2, canvas.width/4, canvas.height/4)
    ctx.drawImage(bricksBackground, 0, 3*canvas.height/4, canvas.width/4, canvas.height/4)
    
    //Second row
    ctx.drawImage(bricksBackground, canvas.width/4, 0, canvas.width/4, canvas.height/4)
    ctx.drawImage(bricksBackground, canvas.width/4, canvas.height/4, canvas.width/4, canvas.height/4) 
    ctx.drawImage(bricksBackground, canvas.width/4, canvas.height/2, canvas.width/4, canvas.height/4)
    ctx.drawImage(bricksBackground, canvas.width/4, 3*canvas.height/4, canvas.width/4, canvas.height/4)

    //Third row
    ctx.drawImage(bricksBackground, canvas.width/2, 0, canvas.width/4, canvas.height/4)
    ctx.drawImage(bricksBackground, canvas.width/2, canvas.height/4, canvas.width/4, canvas.height/4) 
    ctx.drawImage(bricksBackground, canvas.width/2, canvas.height/2, canvas.width/4, canvas.height/4)
    ctx.drawImage(bricksBackground, canvas.width/2, 3*canvas.height/4, canvas.width/4, canvas.height/4)
    
    //Fourth row
    ctx.drawImage(bricksBackground, 3*canvas.width/4, 0, canvas.width/4, canvas.height/4)
    ctx.drawImage(bricksBackground, 3*canvas.width/4, canvas.height/4, canvas.width/4, canvas.height/4) 
    ctx.drawImage(bricksBackground, 3*canvas.width/4, canvas.height/2, canvas.width/4, canvas.height/4)
    ctx.drawImage(bricksBackground, 3*canvas.width/4, 3*canvas.height/4, canvas.width/4, canvas.height/4)

    
}