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
    //convertToScore();
	clearTimeout(timerID);
}

function convertToScore(){
    let remainingTime = (levelTime - currentTime) / 1000;
    let addedScore;

    if (remainingTime > 0) {
        addedScore = Math.floor(remainingTime * 20);
    }

    //console.log(addedScore);

    players.forEach(player => {
        if (player.dead == false) {
            player.score += addedScore;
        }
    });
}