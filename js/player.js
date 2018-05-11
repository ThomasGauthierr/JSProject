class Player {
    constructor(playerNumber, hookNumber, x, bodyColor, hookColor) {
        this.width = 70;
        this.headLength = 0;
        this.bodyLength = 100;
        this.x = x || canvas.width / 6;
        this.y = canvas.height;
        this.headColor = 'pink';
        this.bodyColor = bodyColor || 'black';
        this.hookColor = hookColor || 'lightgrey';
        this.maxSpeed = 5;
        this.speed = 0;
        this.hookNumber = hookNumber || 1;
        this.hooks = [];
        this.lives = 5;
        this.score = 0;
        this.totalHeight = this.bodyLength + this.headLength;
        this.dead = false;
        this.dir = DIR_RIGHT;
        this.spritesheet = new Image();
        this.playerNumber = playerNumber;
        if (playerNumber == 1) {
            console.log("player1")
            this.spritesheet.src = "sprites/Player1.png";
            console.log(this.spritesheet.src)
        } else {
            this.spritesheet.src = "sprites/Player2.png";
        }
    
        
        initSprites(this.spritesheet, SPRITE_WIDTH, SPRITE_HEIGHT, 
                    NB_DIRECTIONS, NB_FRAMES_PER_POSTURE, playerNumber);     

        for(let i = 0; i < hookNumber; i++) {
            this.hooks.push(new Hook(this, i));
        }
    }

    draw(ctx) {
        if (!this.dead) {
            /*
            ctx.save();
        
            ctx.fillStyle = this.bodyColor;
            ctx.fillRect(this.x, this.y - this.bodyLength, this.width, this.bodyLength);
        
            ctx.fillStyle = this.headColor;
            ctx.fillRect(this.x, this.y - (this.headLength + this.bodyLength), this.headLength, this.width);

            ctx.restore();
            */
           if (this.speed != 0) {
                if (this.playerNumber == 1) {
                    spritesPlayer1[this.dir].renderMoving(this.x, this.y, 1);
                } else {
                    spritesPlayer2[this.dir].renderMoving(this.x, this.y, 1);
                }
            } else {
                if (this.playerNumber == 1) {
                    spritesPlayer1[this.dir].render(this.x, this.y, 1);
                } else {
                    spritesPlayer2[this.dir].render(this.x, this.y, 1);
                }
           }
           
        }
    }

    move() {
        if (!this.dead) {
            this.x += this.speed;
        }
    }

    // Shooting the hook
    shoot() {
        if (!this.dead) {    
            if (this.hookNumber >= 1) {
                this.hooks[this.findAvailableHook()].shoot(this.x + (this.width - this.hooks[0].width)/2);
                this.hookNumber--;
            }
        }
    }

    //Find one hook which is not thrown yet
    findAvailableHook() {
        let i = 0;
        let availableHook = 0;

        this.hooks.forEach(hook => {
            if (!hook.isShot) {
                availableHook = i;
            }
            i++;
        });

        return availableHook;
    }

}