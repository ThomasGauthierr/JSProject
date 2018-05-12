class Player {
    constructor(playerNumber, hookNumber, x, hookColor) {
        this.width = 65;
        this.x = x || canvas.width / 6;
        this.y = canvas.height;
        this.hookColor = hookColor || 'lightgrey';
        this.maxSpeed = 5;
        this.speed = 0;
        this.hookNumber = hookNumber || 1;
        this.initHookNumber = hookNumber;
        this.hooks = [];
        this.lives = 5;
        this.score = 0;
        this.totalHeight = 90;
        this.dead = false;
        this.dir = DIR_RIGHT;
        this.spritesheet = new Image();
        this.playerNumber = playerNumber;
        if (playerNumber == 1) {
            this.spritesheet.src = "sprites/Player1.png";
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

    reinitHooks() {
        this.hooks = [];
        this.hookNumber = this.initHookNumber;
        for(let i = 0; i < this.hookNumber; i++) {
            this.hooks.push(new Hook(this, i));
        }
    }

    setHookNumber(hookNumber) {
        this.initHookNumber = hookNumber;
        this.reinitHooks();
    }
}