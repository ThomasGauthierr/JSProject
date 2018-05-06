let levelTime = 10000;
let maxLevel = 3;

function initlevel(){
    bubbles = [];
    gravity = 1; // a changer suivant la jouabilité
    ceiling.reset();
    decor = [];
    decor.push(new Wall(canvas.width,0,10,canvas.height,"blue"));
    decor.push(new Wall(-10,0,10,canvas.height,"blue"));
    chronoStart();
}

function level1() {
    initlevel();
    ceiling.moving = true;
     // Bubble creation
    bubbles.push(new Bubble(200,100,2));
    decor.push(new Wall(canvas.width/2,0,40,canvas.height,"blue"));
}

function level2() {
    initlevel();
     // Bubble creation
     console.log("size decor [] = " + decor.length);
    bubbles.push(new Bubble(0,10,2));
    bubbles.push(new Bubble(50,10,1));
}

function level3() {
    initlevel();
     // Bubble creation
    bubbles.push(new Bubble(0,10,1));
    bubbles.push(new Bubble(50,10,1));
    bubbles.push(new Bubble(10,50,1));
}