

function loadSoundEffects() {
    // load all little sound effects for fast use
    var button = document.querySelector("#button1");

    bubblePop = new Howl({
        urls: ['https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/plop.mp3'],
        onload: function () {
            console.log("Loaded asset ");
        }
    });
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

function pauseMenuBackgroundMusic() {
    let audioPlayer = document.querySelector("#menuPlayer");
    audioPlayer.pause();
}

function pauseIngameBackgroundMusic() {
    let audioPlayer = document.querySelector("#ingamePlayer");
    audioPlayer.pause();
}

