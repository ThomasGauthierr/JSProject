let levelTime = 10000;

function level1() {
    bubbles = [];
     
     // Bubble creation
     bubbles.push(new Bubble(0,0,2));
}

function level2() {
    bubbles = [];
    
     // Bubble creation
     bubbles.push(new Bubble(0,0,2));
     bubbles.push(new Bubble(50,10,1));
}

function level3() {
    bubbles = [];

     // Bubble creation
     bubbles.push(new Bubble(0,0,1));
     bubbles.push(new Bubble(50,10,1));
     bubbles.push(new Bubble(10,50,1));
}