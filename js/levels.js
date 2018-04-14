let levelTime = 10000;

function initlevel(){
    bubbles = [];
    gravity = 1 // a changer suivant la jouabilité
}

function level1() {
    initlevel();
     // Bubble creation
    bubbles.push(new Bubble(0,100,3));
}

function level2() {
    initlevel();
     // Bubble creation
    bubbles.push(new Bubble(0,0,2));
    bubbles.push(new Bubble(50,10,1));
}

function level3() {
    initlevel();
     // Bubble creation
    bubbles.push(new Bubble(0,0,1));
    bubbles.push(new Bubble(50,10,1));
    bubbles.push(new Bubble(10,50,1));
}