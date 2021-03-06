class Ceiling {
    constructor (move){
        this.moving = move || false;
        this.x = 0;
        this.y = 0;
        this.vitesse = 0.5;
        this.height = 0;
        this.color = "grey";
    }

    draw(ctx){
        ctx.save();
        
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y,canvas.width,this.height);

        ctx.restore();
    }

    move (){
        if (this.moving){
            this.height += this.vitesse;
        }
    }

    reset(){
        this.height = 0;
    }
}