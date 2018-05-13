
function sound(src, bool) {
    this.sound = document.createElement("audio");
    this.sound.src = "sounds/" + src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.loop = bool || false;
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
    this.reset = function(){
        this.sound.load();
    }
}

function loadSoundEffects() {
    bubblePop = new sound('plop.mp3');
    playerHit = new sound('hit.mp3');
    gameOverSound = new sound('hellodarkness.mp3');
    congratzSound = new sound('happykids.mp3');
    menuMusic = new sound('introMusic.mp3',true);
    inGameMusic = new sound('inGame.wav',true);
}

function playSound(soundEffect) {
    soundEffect.play();
}

function stopSound(soundEffect){
    soundEffect.stop();
    soundEffect.reset();
}

/*        if online
            
function loadSoundEffects() {
    // load all little sound effects for fast use

    bubblePop = new Howl({
        urls: ['sounds/plop.mp3'],
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

    congratzSound =new Howl ({
        urls: ['sounds/happykids.mp3']
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
*/

