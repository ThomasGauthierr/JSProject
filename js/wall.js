class Wall {
    constructor ( x,y,w,h,color,removable){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = color || "black";
        this.removable = removable || false;
    }

    draw(){
        ctx.save();

        ctx.fillStyle = this.color;
        
        ctx.fillRect(this.x,this.y,this.width, this.height);

        ctx.restore();
    }
}