let startTime = 0
let start = 0
let end = 0
let currentTime = 0
let timerID = 0

function chrono() {
    let diff = new Date() - start;
    diff = new Date(diff);
    currentTime = (60000 * diff.getMinutes() +
        1000 * diff.getSeconds() + 
        diff.getMilliseconds());
    timerID = setTimeout("chrono()", 1);
}

function drawTimer() {

    let ctx = canvasTimer.getContext("2d");

    ctx.save();
      
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasTimer.width, canvasTimer.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvasTimer.width,
        canvasTimer.length * (1 - currentTime / levelTime ));

    ctx.fillRect(0,0,canvasTimer.width * (1 - currentTime/levelTime),canvasTimer.height);

    ctx.restore();
}

function chronoStart(){
    start = new Date();
    chrono();
}

function chronoStop(){
	clearTimeout(timerID);
}
