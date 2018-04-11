class Hook {
    // WARNING : each hook number of one player has to be different
    // and have to correspond with its index in his hooks array
    constructor(player, number)  {
        this.x = 0;
        this.player = player;
        this.size = this.player.bodyLength + this.player.headLength;
        this.color = 'lightgrey';
        this.width = 3;
        this.speed = 8;
        this.isShot = false;
        this.number = number;
        this.damage = 1;
    }

    draw(ctx) {
        if (this.isShot) {
            ctx.save();

            ctx.fillStyle = this.color;
            
            ctx.fillRect(this.x,canvas.height - this.size,this.width, this.size);
            ctx.restore();
        }
    }

    grow() {
        if (this.isShot) {
            this.size += this.speed;

            // We remove the hook if it reach the canvas
            if (this.size >= canvas.height) {
                this.remove();   
            }
        }
    }

    // Initializing parameters so the shot goes from
    // the middle of the player
    shoot(x) {
        this.x = x;
        this.isShot = true;
    }

    // Function to call when the hook has to be removed, so when
    // it touches the sky, a ball, or the player dies
    remove() {
        this.isShot = false;
        console.log ("hook at x =  " + this.x);
        this.player.hookNumber ++;
        this.size = this.player.totalHeight;
    }

}