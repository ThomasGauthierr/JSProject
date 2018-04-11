
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
            if (element.y <= element.r){
                element.y = element.r;
                element.vitesseY = - element.vitesseY;
            } else if (element.y >= canvas.height - element.r){
                element.y = canvas.height - element.r;
                element.vitesseY = - element.vitesseY;
            }
    });
}

function playerBubbleCollisionTest( player ){
    bubbles.forEach(element => {
        
    });
}

function harponBubbleCollisionTest(){
    players.forEach(player => {
        player.hooks.forEach(hook => {
            bubbles.forEach(bubble => {
                if (hook.x <= bubble.x + bubble.r  && hook.x >= bubble.x-bubble.r){
                    // si x hook compris dans x bubble alors on verifie y
                    if ( (bubble.y + bubble.r) >= (canvas.height - hook.size)){
                        bubble.life -= hook.damage;
                        hook.remove();
                        player.score += 100 + 50 * (currentLevel - 1);
                    }
                }
            });
        });
    });
}