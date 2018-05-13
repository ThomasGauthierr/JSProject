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

// si on veut faie des portes : construire deux murs ou revoir la "disparition" des murs et faire l'animation

// bubble (x,y,life,couleur,vitessex,vitessey)

function level1() {
    initlevel();
    ceiling.moving = false;
    // Bubble creation
    //bubbles.push(new Bubble(200, 100, 2));
    bubbles.push(new Bubble(canvas.width - 200, 100, 1));
    decor.push(new Wall(canvas.width /2, 0, 40, canvas.height, "blue",true, 2));
}

function level2() {
    initlevel();
    // Bubble creation
    bubbles.push(new Bubble(60, 30, 2));
    bubbles.push(new Bubble(50, 30, 1));
}

function level3() {
    initlevel();
    // Bubble creation
    bubbles.push(new Bubble(60, 30, 2));
    bubbles.push(new Bubble(canvas.width - 50, 30, 1));
    bubbles.push(new Bubble(30, 50, 1));
}
