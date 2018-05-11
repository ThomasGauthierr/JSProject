// info about spritesheet
let SPRITE_WIDTH = 100;
let SPRITE_HEIGHT = 100;
let NB_DIRECTIONS = 2;
let NB_FRAMES_PER_POSTURE = 4;
let scale = 1;
let DIR_RIGHT = 0;
let DIR_LEFT = 1;

let spritesPlayer1 = {
	// As many sprites as direction
	// Each element in this array contains n images
	sprites : []
};

let spritesPlayer2 = {
	// As many sprites as direction
	// Each element in this array contains n images
	sprites : []
};


function SpriteImage(img, x, y, width, height) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

    // xPos and yPos = position where the sprite should be drawn,
    // scale = rescaling factor between 0 and 1
    this.render = function(xPos, yPos, scale) {
          ctx.drawImage(this.img, 
		  this.x, this.y, 
		  this.width, this.height, 
		  xPos, yPos, 
		  this.width*scale, this.height*scale);
    };
}

function Sprite(spritesheet, x, y, width, height, nbImages, nbFramesOfAnimationBetweenRedraws) {
	this.spriteImages = [];
    this.currentFrame = 0;
    this.nbFrames = nbImages;
    this.nbTicksBetweenRedraws = nbFramesOfAnimationBetweenRedraws;
    this.nbCurrentTicks=0;

    // let's process the row in the big image, and extract all sprites for a given posture
    // of animation
	for(let i = 0; i < nbImages; i++) {
		// we extract the subimage
		this.spriteImages[i] = new SpriteImage(spritesheet, x+i*width, y, width, height);
	}

	this.renderMoving = function(x, y, scale) {
		console.log("render moving")
		// renders animated sprite, changed every nbTicksBetweenRedraws
		// the frame number
		
		// draw the sprite with the current image
		this.spriteImages[this.currentFrame].render(x - 7, y - SPRITE_HEIGHT, scale);

		// increment the number of ticks of animation 
		this.nbCurrentTicks++;

		if(this.nbCurrentTicks > this.nbTicksBetweenRedraws) {
			// enough time elapsed, let's go to the next image
			this.currentFrame++;
			if(this.currentFrame == this.nbFrames) {
				this.currentFrame=0;
			}
			this.nbCurrentTicks = 0;
		}
	};
	this.render = function(x, y, scale) {
		console.log("render not moving    x : " + x, "     y : " + y)
		// draws always frame 0, static position
		this.spriteImages[0].render(x - 7, y - SPRITE_HEIGHT, scale);
	};
}
function initSprites(spritesheet, spriteWidth, spriteHeight, nbLinesOfSprites, 
						  nbSpritesPerLine, playerNumber) { 
	console.log("init sprites")
   
    // sprite extraction
   	for(let i= 0; i < nbLinesOfSprites; i++) {
   		let yLineForCurrentDir = i*spriteHeight;

		if (playerNumber == 1) {
   		let sprite = new Sprite(spritesheet, 0, yLineForCurrentDir, 
   								spriteWidth, spriteHeight, 
   								nbSpritesPerLine,
   								3); // draw every 1s
		   spritesPlayer1[i] = sprite;
		} else {
			let sprite = new Sprite(spritesheet, 0, yLineForCurrentDir, 
				spriteWidth, spriteHeight, 
				nbSpritesPerLine,
				3); // draw every 1s
				spritesPlayer2[i] = sprite;
		}
   	}
}