

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

    throwSound = new Howl({
        urls: ['sounds/hookDeploy.mp3']
    })

    gameOverSound = new Howl({
        urls: ['sounds/hellodarkness.mp3'],
        onload: function () {
            console.log("Loaded darkness ");
        },
    })

    menuMusic = new Howl({
        urls: ['sounds/introMusic.mp3'],
        loop: true,
        onload: function(){
            console.log("menu Music loaded");
        }
    })

    inGameMusic = new Howl({
        urls: ['sounds/inGame.wav'],
        loop: true
    })
}

function playSound(soundEffect) {
    soundEffect.play();
}

function stopSound(soundEffect){
    soundEffect.stop();
}

function muteAll() {
    // mute all sound after click on button "mute"

    // TODO
}

