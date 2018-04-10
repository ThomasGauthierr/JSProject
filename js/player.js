class Player {
    constructor() {
        this.width = 20;
        this.headLength = 20;
        this.bodyLength = 60;
        this.x = canvas.width / 2;
        this.y = canvas.height;
        this.headColor = 'pink';
        this.bodyColor = 'black';
        this.maxSpeed = 5;
        this.speed = 0;
        this.hookNumber = 1;
        this.hooks = [new Hook(this)];
    }

    draw(ctx) {
        ctx.save();
      
        ctx.fillStyle = this.bodyColor;
        ctx.fillRect(this.x, this.y - this.bodyLength, this.width, this.bodyLength);
      
        ctx.fillStyle = this.headColor;
        ctx.fillRect(this.x, this.y - (this.headLength + this.bodyLength), this.headLength, this.width);

        ctx.restore();
    }

    move() {
        this.x += this.speed;

        if (this.x < 0) {
            this.x = 0;
            this.speed = 0;
        }

        if (this.x > (canvas.width - this.width)) {
            this.x = canvas.width - this.width;
            this.speed = 0;
        }
    }

    // Shooting the hook
    //ToDo : Handle multiple hooks
    shoot() {
        if (this.hookNumber >= 1) {
            this.hookNumber--;
            this.hooks[this.hookNumber].shoot(this.x + (this.width - this.hooks[0].width)/2);
        }
    }

}