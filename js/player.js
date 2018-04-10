class Player {
    constructor() {
        this.width = 20;
        this.headLength = 20;
        this.bodyLength = 60;
        //this.x = window.innerWidth/2;
        //this.y = canvasBottom;
        this.x = canvas.width / 2;
        this.y = canvas.height;
        this.headColor = 'pink';
        this.bodyColor = 'black';
        this.maxSpeed = 5;
        this.speed = 0;
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
    }

}