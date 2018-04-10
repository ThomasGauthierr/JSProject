class Hook {
    constructor(x, player)  {
        this.x = x;
        this.player = player;
        this.size = this.player.bodyLength + this.player.headLength;
        this.color = 'lightgrey';
        this.width = 3;
        this.speed = 8;
        this.isShot = false;
    }

    draw(ctx) {
        if (this.isShot) {
            ctx.save();

            ctx.fillStyle = this.color;
            //ctx.fillRect(this.x, canvas.height, this.size, this.width);
            ctx.fillRect(this.x,canvas.height - this.size,this.width, this.size);
            ctx.restore();
        }
    }

    grow() {
        if (this.isShot) {
            this.size += this.speed;
            if (this.size >= canvas.height) {
                this.isShot = false;
                player.hookNumber ++;
                this.size = player.bodyLength + player.headLength;
            }
        }
    }

    shoot(x) {
        this.x = x;
        this.isShot = true;
    }

}