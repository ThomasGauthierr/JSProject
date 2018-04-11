class Bubble {
    constructor (x,y,life,couleur,vitessex){
        this.x = x || 0;
        this.y = y || 0;
        this.life = life || 1;
        this.r = life * 10;
        this.couleur = couleur ||'red';
        this.vitesseX = vitessex || 1;
        this.vitesseY = 3; // gravité
    }

    draw(){
        // dessine bulle
        ctx.save();

        ctx.strokeStyle = this.couleur;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;  
        ctx.fill();

        // debug
        /*
        console.log( "x : " + this.x);
        console.log ("y : " + this.y);
        */

        ctx.restore();
    }

    move(){
        // mouvement
        this.x = this.x + this.vitesseX;
        this.y = this.y + this.vitesseY;
    }
}