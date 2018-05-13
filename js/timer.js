let startTime = 0
let start = 0
let end = 0
let currentTime = 0
let timerID = 0
let chronoEnd;
let diff;
let addedScore;

function chrono() {
    if (state == STATE_GAME) {
        diff = new Date() - start;
        diff = new Date(diff);
        currentTime = (60000 * diff.getMinutes() +
            1000 * diff.getSeconds() + 
            diff.getMilliseconds());

        addedScore = Math.floor((levelTime - currentTime) * 20 / 1000);

        if (currentTime - levelTime >= 0 && !chronoEnd) {
            chronoEnd = true;
            addedScore = 0;
            players.forEach(p => {
                if (!p.dead) {
                    p.lives--;
                }
            });

            loseGame(0);
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
    ctxTimer.font = '12pt "Press Start 2P"';
    ctxTimer.fillText(((levelTime - currentTime)/1000).toString().slice(0,3),canvas.width/2 - 4,22);

    ctxTimer.restore();
}

function chronoStart(){
    start = new Date();
    chronoEnd = false;
    chrono();
}

function chronoStop(){
	clearTimeout(timerID);
}