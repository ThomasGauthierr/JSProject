let levelTime;
let maxLevel = 6;
let hookNumber;

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
        p.setHookNumber(hookNumber);
    });
}

// si on veut faie des portes : construire deux murs ou revoir la "disparition" des murs et faire l'animation

// bubble (x,y,life,couleur,vitessex,vitessey)

function level1() {
    hookNumber = 1;
    levelTime = 10000;
    setDefaultPosXPlayers();
    ceiling.moving = false;

    initlevel();
    // Bubble creation
    //bubbles.push(new Bubble(200, 100, 2));
    bubbles.push(new Bubble(200, 100, 1));
    bubbles.push(new Bubble(canvas.width - 200, 100, 1, -2));
    //decor.push(new Wall(canvas.width /2, 0, 40, canvas.height, "blue",true, 2));
}

function level2() {
    hookNumber = 2;
    levelTime = 10000;
    setDefaultPosXPlayers();
    ceiling.moving = false;

    initlevel();
    // Bubble creation
    bubbles.push(new Bubble(60, 60, 2));
}

function level3() {
    hookNumber = 2;
    levelTime = 11000;
    setDefaultPosXPlayers();
    ceiling.moving = false;

    initlevel();
    // Bubble creation
    bubbles.push(new Bubble(90, 60, 2));
    bubbles.push(new Bubble(30, 50, 1));
    bubbles.push(new Bubble(canvas.width - 30, 50, 1, -2));
    bubbles.push(new Bubble(canvas.width - 90, 60, 2, -2));
}

function level4() {
    hookNumber = 2;
    levelTime = 20000;
    setPosXPlayers(100);
    ceiling.moving = false;

    initlevel();
    // Bubble creation
    bubbles.push(new Bubble(canvas.width / 2, 100, 4, 0, 0.1));
}

function level5() {
    hookNumber = 1;
    levelTime = 9000;
    setPosXPlayers(100);
    ceiling.moving = false;

    initlevel();
    // Bubble creation
    bubbles.push(new Bubble(200, 250, 1));
    bubbles.push(new Bubble(canvas.width - 200, 250, 1, -2));
    bubbles.push(new Bubble(300, 250, 1));
    bubbles.push(new Bubble(canvas.width - 300, 250, 1, -2));
    bubbles.push(new Bubble(400, 250, 1));
    bubbles.push(new Bubble(canvas.width - 400, 250, 1, -2));
    
    decor.push(new Ceiling(true));
}

function level6() {
    hookNumber = 0;
    levelTime = 12000;
    setPosXPlayers(250);
    ceiling.moving = true;

    initlevel();
    // Bubble creation
    //bubbles.push(new Bubble(200, 100, 2));
    decor.push(new Wall(200, 0, 40, canvas.height, "gray",true, 2));
    decor.push(new Wall(canvas.width - 200, 0, 40, canvas.height, "gray",true, 2));

    bubbles.push(new Bubble(300, 100, 1));
    bubbles.push(new Bubble(canvas.width - 300, 100, 1, -2));
    bubbles.push(new Bubble(450, 100, 1));
    bubbles.push(new Bubble(canvas.width - 450, 100, 1, -2));
}
