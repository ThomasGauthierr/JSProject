let startTime = 0
let start = 0
let end = 0
let currentTime = 0
let timerID = 0
let chronoEnd;
let diff;

function chrono() {
    if (state == STATE_GAME) {
        diff = new Date() - start;
        diff = new Date(diff);
        currentTime = (60000 * diff.getMinutes() +
            1000 * diff.getSeconds() + 
            diff.getMilliseconds());

        if (currentTime - levelTime >= 0 && !chronoEnd) {
            chronoEnd = true;
            players.forEach(p => {
                if (!p.dead) {
                    p.lives--;
                }
            });

            loseGame(0);
            //requestAnimationFrame(mainMenuAnimation);
        } else {    
            timerID = setTimeout("chrono()", 1);
        }
    }
}

function drawTimer() {
    ctxTimer.save();

    ctxTimer.fillStyle = 'red';
    ctxTimer.fillRect(0, 0, canvasTimer.width,
        canvasTimer.length * (1 - currentTime / levelTime ));

    ctxTimer.fillRect(0,0,canvasTimer.width * (1 - currentTime/levelTime),canvasTimer.height);
    
    ctxTimer.fillStyle = 'black';
    ctxTimer.font = "18pt Calibri bold";
    ctxTimer.fillText(diff,canvas.width/2,18);

    ctxTimer.restore();
}

function chronoStart(){
    start = new Date();
    chronoEnd = false;
    chrono();
}

function chronoStop(){
    convertToScore();
	clearTimeout(timerID);
}

function convertToScore(){
    
}