let levelTime = 10000;
let maxLevel = 3;

function initlevel(){
    bubbles = [];
    gravity = 1; // a changer suivant la jouabilité
    ceiling.reset();
    decor = [];
    chronoStart();
}

function level1() {
    initlevel();
    ceiling.moving = true;
     // Bubble creation
    bubbles.push(new Bubble(0,100,2));
   // decor.push(new ceiling(true));
}

function level2() {
    initlevel();
     // Bubble creation
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