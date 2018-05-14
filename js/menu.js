// This has to be set to false if the sizes works by percentage
// WARNING : Not working atm, let it to true :o)
let pixelPos = true;

let canvas, canvasTimer, canvasBottom;
let ctx, ctxTimer;

window.onload = init;

let posXButton1P,posYButton1P,widthButton1P,heightButton1P,posXButton2P,posYButton2P,widthButton2P, heightButton2P;
let posXButtonControls, posYButtonControls, widthButtonControls, heightButtonControls;
let posXmuteButton,posYmuteButton,widthMuteButton,heightMuteButton;
let mute = false;

let numberOfPlayers = 0;

let state;

let STATE_MAIN_MENU = 0;
let STATE_GAME = 1;
let STATE_TRANSITION_WIN = 2;
let STATE_TRANSITION_LOSE = 3;
let STATE_TRANSITION_OVER = 4;
let STATE_CONTROLS = 5;

let highscore1P;
let highscore2P;
loadSoundEffects();

let imageControls = new Image();
imageControls.src = "assets/controlsPanel/controlsPanel.png";

let muteImage = new Image();
muteImage.src = "assets/unmuted.png";

function init() {
    initCookies();

    playSound(menuMusic);
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

    // Keyboard listeners
    window.onkeydown = keyDown;
    window.onkeyup = keyUp;
    
    //Mouse listeners
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
    
    //Title
    ctx.fillStyle = 'black';
    ctx.font = '80pt bubble';
    ctx.fillText("Bubble", 290, 120);
    ctx.fillText("Trouble", 250, 230)
    
    //Button 1P
    ctx.fillRect(posXButton1P - 3, posYButton1P - 3, widthButton1P + 6, heightButton1P + 6);
    
    ctx.fillStyle = 'orange';
    ctx.fillRect(posXButton1P, posYButton1P, widthButton1P, heightButton1P);
    
    ctx.fillStyle = 'black';
    ctx.font = '15pt "Press Start 2P"';

    ctx.fillText("1 player", posXButton1P + 25, posYButton1P + 35);

    //Button 2P
    ctx.fillStyle = 'black';
    ctx.fillRect(posXButton2P - 3, posYButton2P - 3, widthButton2P + 6, heightButton2P + 6);
    
    ctx.fillStyle = 'orange';
    ctx.fillRect(posXButton2P, posYButton2P, widthButton2P, heightButton2P);
    
    ctx.fillStyle = 'black';
    ctx.font = '15pt "Press Start 2P"';

    ctx.fillText("2 players", posXButton2P + 15, posYButton2P + 35);
    
    //Button Controls
    ctx.fillStyle = 'black';
    ctx.fillRect(posXButtonControls - 3, posYButtonControls - 3, widthButtonControls + 6, heightButtonControls + 6);
    
    ctx.fillStyle = 'orange';
    ctx.fillRect(posXButtonControls, posYButtonControls, widthButtonControls, heightButtonControls);
    
    ctx.fillStyle = 'black';
    ctx.font = '15pt "Press Start 2P"';

    ctx.fillText("Controls", posXButtonControls + 20, posYButtonControls + 37);
    

    // mute button
    /*
    ctx.fillStyle = 'black';
    ctx.fillRect(posXmuteButton - 3 ,posYmuteButton - 3, widthMuteButton + 6, heightMuteButton + 6);

    ctx.fillStyle = 'orange';
    ctx.fillRect(posXmuteButton ,posYmuteButton, widthMuteButton, heightMuteButton);

    ctx.fillStyle = 'black';
    ctx.font = '13pt "Press Start 2P"';
    ctx.fillText ("Mute Musics", posXmuteButton + 5 , posYmuteButton + 30);
    */

    ctx.drawImage(muteImage, posXmuteButton, posYmuteButton, widthMuteButton, heightMuteButton);

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
    
    if (state == STATE_CONTROLS) {
        drawnControls();
    }
}

function buttonsPositionning(){
    let gap = 40;
    let nbButtons = 2;
    let widthButton = 200;
    let heightButton = 50;

    //Button 1P
    posXButton1P = canvas.width / 2 - widthButton /2;
    posYButton1P = 260; 
    widthButton1P = widthButton;
    heightButton1P = heightButton;

    //Button 2P
    posXButton2P = posXButton1P;
    posYButton2P = posYButton1P + heightButton + gap;
    widthButton2P = widthButton1P;
    heightButton2P = heightButton1P;

    //Button Controls
    posXButtonControls = posXButton1P;
    posYButtonControls = posYButton2P + heightButton + gap;
    widthButtonControls = widthButton1P;
    heightButtonControls = heightButton1P;

    //Mute Button
    posXmuteButton = canvas.width / 2 - 35;
    posYmuteButton = posYButtonControls + gap + heightButton;
    widthMuteButton = 70 ;
    heightMuteButton = 50;
}

function drawBackGround() {
    ctx.save();

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

    ctx.restore();
}

function drawnControls() {
    ctx.save();
    drawBackGround();
    
    ctx.drawImage(imageControls, 0, 0, canvas.width, canvas.height);
    ctx.restore();
}