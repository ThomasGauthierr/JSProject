let hookHeadSize = 50;

class Hook {
    // WARNING : each hook number of one player has to be different
    // and have to correspond with its index in his hooks array
    constructor(player, number)  {
        this.x = 0;
        this.player = player;
        this.size = this.player.totalHeight;
        this.color = this.player.hookColor;
        this.width = 10;
        this.speed = 8;
        this.isShot = false;
        this.number = number;
        this.damage = 1;
        this.throwSound = new sound('hookDeploy.mp3');
        this.hookBody = new Image();
        if (this.player.playerNumber == 1) {
            this.hookBody.src = "assets/hook_body_P1.png";
        } else {
            this.hookBody.src = "assets/hook_body_P2.png";
        }
        this.hookHeadImage = new Image();
        this.hookHeadImage.src = "assets/hook_head.png"
    }

    draw(ctx) {
        if (this.isShot) {
            ctx.save();

            ctx.fillStyle = this.color;
            
           // ctx.fillRect(this.x,canvas.height - this.size - 3,this.width, this.size);
            ctx.drawImage(this.hookBody, this.x, canvas.height - this.size + hookHeadSize, this.width, this.size);
            ctx.drawImage(this.hookHeadImage, this.x, canvas.height - this.size, this.width, hookHeadSize);
            ctx.restore();
        }
    }

    grow() {
        if (this.isShot) {
            this.size += this.speed;

            // We remove the hook if it reach the canvas
            if (this.size >= canvas.height - ceiling.height) {
                this.remove();   
            }
        }
    }

    // Initializing parameters so the shot goes from
    // the middle of the player
    shoot(x) {
        this.x = x;
        this.isShot = true;
        playSound(this.throwSound);
    }

    // Function to call when the hook has to be removed, so when
    // it touches the sky, a ball, or the player dies
    remove() {
        stopSound(this.throwSound);
        this.isShot = false;
        this.player.hookNumber ++;
        this.size = this.player.totalHeight;
    }

}