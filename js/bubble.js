let bubbleImage = new Image();
bubbleImage.src = "assets/bubble.png";

class Bubble {
    constructor (x,y,life,vitessex,vitessey){
        this.x = x || 0;
        this.y = y || 0;
        this.life = life || 1;
        this.r = this.life * 20;        
        this.vitesseX = vitessex || 2;
        if (vitessex == 0) {
            this.vitesseX = 0;
        }
        this.vitesseY = vitessey || 1;
        this.vitesseYMin = 25;
    }

    draw(){
        ctx.save();
        this.r = this.life * 20;
        /*
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;  
        ctx.fill();
        */
        ctx.drawImage(bubbleImage, this.x - this.r, this.y - this.r, this.r*2, this.r*2);

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