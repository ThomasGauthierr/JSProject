class Bubble {
    constructor (x,y,life,couleur,vitessex,vitessey){
        this.x = x || 0;
        this.y = y || 0;
        this.life = life || 1;
        this.r = life * 10;
        this.couleur = couleur ||'red';
        this.vitesseX = vitessex || 2;
        this.vitesseY = vitessey || 1;
        this.vitesseYMin = 25;
    }

    draw(){
        ctx.save();

        ctx.strokeStyle = this.couleur;
        this.r = this.life * 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;  
        ctx.fill();

        ctx.restore();
    }

    move(){
        this.vitesseY += gravity;
        this.x = this.x + this.vitesseX;
        this.y = this.y + this.vitesseY;
    }

    reboundGround(){
        this.vitesseY = - this.vitesseY;
        if (Math.abs(this.vitesseY) <= this.vitesseYMin){
            this.vitesseY = - this.vitesseYMin;
        }
    }
}