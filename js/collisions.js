
function wallsBubbleCollisionTest(){
    bubbles.forEach(element => {
        // gauche droite
            if (element.x - element.r <= 0){
                element.x = element.r;
                element.vitesseX = - element.vitesseX;
            } else if (element.x + element.r >= canvas.width ){
                element.x = canvas.width - element.r;
                element.vitesseX = - element.vitesseX;
            }

        // haut bas
            if (element.y - element.r <= 0){
                element.y = element.r;
                element.vitesseY = - element.vitesseY;
                element.life -= 1;
                bubbleSplit(element);
            } else if (element.y >= canvas.height - element.r){
                element.y = canvas.height - element.r;
                element.reboundGround();
            }
    });
}

function playerBubbleCollisionTest( player ){
    bubbles.forEach(bubl => {
        players.forEach(playr => {
            if (!playr.dead) {

                // coins hd et hg
                // dist = sqrt((xb - xa)²+(yb-ya)²);

                var dist_Hg_r = Math.sqrt(Math.pow(bubl.x - playr.x ,2) + Math.pow(bubl.y - (playr.y - playr.totalHeight),2));
                var dist_Hd_c = Math.sqrt(Math.pow(bubl.x - playr.x - playr.width ,2) + Math.pow(bubl.y - (playr.y- playr.totalHeight),2));
                // si length player >= width player
                var centerRectX = playr.x - playr.width / 2;
                var centerRectY = playr.y - playr.totalHeight/2;
                var dist_centerRect_c = Math.sqrt(Math.pow(bubl.x - centerRectX,2) + Math.pow(bubl.y - centerRectY,2));

                // head hit
                if (dist_Hg_r <= bubl.r || dist_Hd_c <= bubl.r){
                    bubblePlayerCollisionHandler(playr,bubl);
                }
                // body hit
                else if (dist_centerRect_c <= (playr.totalHeight/2 + bubl.r)){
                    if (bubl.x - bubl.r < playr.x + playr.width && bubl.x + bubl.r > playr.x){
                        bubblePlayerCollisionHandler(playr,bubl);
                    }
                }
            }
        });
    });
}

function harponBubbleCollisionTest(){
    players.forEach(player => {
        player.hooks.forEach(hook => {
            if (hook.isShot) {
                bubbles.forEach(bubble => {
                    if (hook.x <= bubble.x + bubble.r  && hook.x >= bubble.x-bubble.r){
                        // si x hook compris dans x bubble alors on verifie y
                        if ( (bubble.y + bubble.r) >= (canvas.height - hook.size)){
                            //hit procedure
                           harponBubbleCollisionHandler(player, hook, bubble);
                        }
                    }
                });
            }
        });
    });
}

function ceilingPlayerCollision(ceil){
    if (ceil.moving){
        players.forEach(p => {
            if (canvas.height - p.totalHeight <= ceil.height){
                playerCeilingCollisionHandler(p,ceil);
            }
        });
    }
}

function bubbleCeilingCollision(ceil){
    bubbles.forEach(bubl => {
        if (bubl.y - bubl.r <= ceil.y + ceil.height ){
            bubbleCeilingCollisionHandler(bubl,ceil);
        }
        
    });
}

function bubblePlayerCollisionHandler(player,bubble){
    bubble.vitesseX = 0;
    bubble.vitesseY = 0;
    player.lives -= 1;
    player.speed = 0;
    player.dead = true;

    loseGame();
}

function harponBubbleCollisionHandler(player, hook, bubble){
    bubble.life -= hook.damage;
    if (bubble.life >= 1){
        bubbleSplit(bubble);
    }else {
        deleteBubble(bubble);
    }
    hook.remove();
    player.score += 100 + 50 * (currentLevel - 1);
    // si il n'y a plus de bulles => end game
}

function playerCeilingCollisionHandler(player,ceil){
    ceil.moving = false;
    ceil.vitess = 0;
    player.lives -=1;
    player.speed = 0;
    player.dead = true;

    loseGame();
}

function bubbleCeilingCollisionHandler(bubble,ceil){
    bubble.life -=1;
    if (bubble.life >= 1){
        bubbleSplit(bubble);
    }
    else {
        deleteBubble(bubble);
    }
}

function bubbleSplit(bubble){
    if (bubble.vitesseY > 0 ){ // descente
        bubble.vitesseY = - bubble.vitesseY;
    }
    rejeton = new Bubble(bubble.x,bubble.y,bubble.life,bubble.couleur, - bubble.vitesseX,bubble.vitesseY);
    bubbles.push(rejeton);
}

function deleteBubble(bubble){
    var index = bubbles.indexOf(bubble);
    bubbles.splice(index,1);
}
                    