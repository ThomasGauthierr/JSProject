
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
    bubbles.forEach(bubl => {
        players.forEach(playr => {
            // coins hd et hg
            // si distance hd_c <= r alors collision, idem pour hg
            // dist = sqrt((xb - xa)²+(yb-ya)²);

            var dist_Hg_r = Math.sqrt(Math.pow(bubl.x - playr.x ,2) + Math.pow(bubl.y - (playr.y - playr.totalHeight),2));
            var dist_Hd_c = Math.sqrt(Math.pow(bubl.x - playr.x - playr.width ,2) + Math.pow(bubl.y - (playr.y- playr.totalHeight),2));

            if (dist_Hg_r <= bubl.r || dist_Hd_c <= bubl.r){
                bubl.vitesseX = 0;
                bubl.vitesseY = 0;
                playr.life -= 1;
                playr.maxSpeed = 0;
                playr.speed = 0;
                chronoStop();
                console.log("collision player_bubble");
                //TODO : restart level 
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
                            bubble.life -= hook.damage;
                            hook.remove();
                            player.score += 100 + 50 * (currentLevel - 1);
                        }
                    }
                });
            }
        });
    });
}
                    