let levelTime = 10000;

function initlevel(){
    bubbles = [];
    bubbleCount = 0;
    gravity = 2; // a changer suivant la jouabilité
}

function level1() {
    initlevel();
     // Bubble creation
    addBubble(new Bubble(0,100,2));
}

function level2() {
    initlevel();
     // Bubble creation
    addBubble(new Bubble(0,0,2));
    addBubble(new Bubble(50,10,1));
}

function level3() {
    initlevel();
     // Bubble creation
    addBubble(new Bubble(0,0,1));
    addBubble(new Bubble(50,10,1));
    addBubble(new Bubble(10,50,1));
}