let startTime = 0
let start = 0
let end = 0
let currentTime = 0
let timerID = 0

function chrono2(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	let msec = diff.getMilliseconds()
	let sec = diff.getSeconds()
	let min = diff.getMinutes()
	let hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	timerID = setTimeout("chrono()", 10)
}

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
