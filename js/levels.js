let levelTime = 10000;
let maxLevel = 3;

function initlevel() {
    bubbles = [];
    gravity = 1; // a changer suivant la jouabilité
    ceiling.reset();
    decor = [];
    // mise en place de murs sur le cote au lieu de comparer coordonnees au canvas, pour eventuellement extend un niveau / sortie
    decor.push(new Wall(canvas.width, 0, 10, canvas.height, "blue"));
    decor.push(new Wall(-10, 0, 10, canvas.height, "blue"));
    
    chronoStart();

    players.forEach(p => {
        p.speed = 0;
    });
}

function level1() {
    initlevel();
    ceiling.moving = false;
    // Bubble creation
    bubbles.push(new Bubble(200, 100, 2));
    //decor.push(new Wall(canvas.width / 2, 0, 40, canvas.height, "blue"));
}

function level2() {
    initlevel();
    // Bubble creation
    bubbles.push(new Bubble(60, 10, 2));
    bubbles.push(new Bubble(50, 10, 1));
}

function level3() {
    initlevel();
    // Bubble creation
    bubbles.push(new Bubble(60, 10, 1));
    bubbles.push(new Bubble(50, 10, 1));
    bubbles.push(new Bubble(10, 50, 1));
}