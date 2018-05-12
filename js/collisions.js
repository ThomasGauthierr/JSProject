
function wallsBubbleCollisionTest(){
    bubbles.forEach(bub => {
        decor.forEach(elemDecor => {
        // gauche droite
            if (bub.x - bub.r <= elemDecor.x + elemDecor.width && bub.x + bub.r >= elemDecor.x){
                if (bub.vitesseX < 0){
                    // si vient de la droite
                    bub.x = elemDecor.x + elemDecor.width + bub.r;
                }else {
                    //si vient de la gauche
                    bub.x = elemDecor.x - bub.r;
                }
                bub.vitesseX = - bub.vitesseX;
            }
        });
        //cas du sol
        if (bub.y + bub.vitesseY >= canvas.height - bub.r){
            bub.y = canvas.height - bub.r;
            bub.reboundGround();
        }
    });
}

function wallsPLayersCollisionTest(){
    decor.forEach(element => {
        players.forEach(plyr => {
            if (plyr.x <= element.x + element.width && plyr.x >= element.x){
                plyr.x = element.x + element.width;
                plyr.speed = 0;
            }else if (plyr.x + plyr.width > element.x && plyr.x + plyr.width < element.x + element.width){
                plyr.x = element.x - plyr.width;
                plyr.speed = 0;
            }
        });
    });
}

function playerBubbleCollisionTest( player ){
    bubbles.forEach(bubl => {
        players.forEach(playr => {
            if (!playr.dead) {
                let x0 = playr.x;
                let y0 = playr.y;
                let x1 = playr.x + playr.width;
                let y1 = playr.y + playr.totalHeight;
                    
                if (bubl.x + bubl.r >= x0 && bubl.x - bubl.r <= x1 &&
                    bubl.y + bubl.r >= y0 && bubl.x - bubl.r <= y1) {
                    bubblePlayerCollisionHandler(playr,bubl);
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
    /* before 
    bubble.vitesseX = 0;
    bubble.vitesseY = 0;
    player.speed = 0;
    */
    player.lives -= 1;
    player.dead = true;
    playSound(playerHit);

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

    playSound(bubblePop);

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
                    