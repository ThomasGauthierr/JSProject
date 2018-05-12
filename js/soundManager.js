

function loadSoundEffects() {
    // load all little sound effects for fast use

    bubblePop = new Howl({
        urls: ['https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/plop.mp3'],
        onload: function () {
            console.log("Loaded bubblepop ");
        }
    });

    playerHit = new Howl({
        urls: ['sounds/hit.mp3'],
        onload: function () {
            console.log("Loaded playerHit ");
        }
    });

    gameOverSound = new Howl({
        urls: ['sounds/hellodarkness.mp3'],
        onload: function () {
            console.log("Loaded darkness ");
        }
    })
    
}

function playSound(soundEffect) {
    soundEffect.play();
}

function menuMusic() {
    // play background music of menu
    let audioPlayer = document.querySelector("#menuPlayer");
    audioPlayer.play();
}

function gameMusic() {
    // in game background music
    let audioPlayer = document.querySelector("#ingamePlayer");
    audioPlayer.play();
}

function gameOverMusic(){
    // gameover music
    let audioPlayer = document.querySelector("#gameOverPLayer");
    audioPlayer.play();
}

function pauseMenuBackgroundMusic() {
    let audioPlayer = document.querySelector("#menuPlayer");
    audioPlayer.pause();
}

function pauseIngameBackgroundMusic() {
    let audioPlayer = document.querySelector("#ingamePlayer");
    audioPlayer.pause();
}

function pauseGameOverMusic(){
    let audioPlayer = document.querySelector("#gameOverPLayer");
    audioPlayer.pause();
}

function muteAll(){
    // mute all sound after click on button "mute"
    
    // TODO
}

