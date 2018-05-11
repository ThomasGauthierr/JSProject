function keyDown(evt) {
    let code = evt.code;

    switch (code) {
        //** Player 1 **//
        // Left arrow => moving left
        case 'KeyA':
            players[0].speed = - players[0].maxSpeed;
            players[0].dir = DIR_LEFT;
            break;
        // Right arrow => moving right
        case 'KeyD':
            if (players[0].x <= canvas.width - players[0].width) {
                players[0].speed = players[0].maxSpeed; 
                players[0].dir = DIR_RIGHT;
            } else {
                x = canvas.width - players[0].width;
            }
            break;
        // Numpad + => Shooting the hook
        case 'Space':
            players[0].shoot();
            break;


        //** Player 2 **//
        // A (azerty) or Q (qwerty) => moving left
        case 'ArrowLeft':            
            if (numberOfPlayers == 2) {
                players[1].speed = - players[1].maxSpeed;
                players[1].dir = DIR_LEFT;
            }
            break;
        // E => moving right
        case 'ArrowRight':            
            if (numberOfPlayers == 2) { 
                if (players[1].x <= canvas.width - players[1].width) {
                    players[1].speed = players[1].maxSpeed; 
                    players[1].dir = DIR_RIGHT;
                } else {
                    x = canvas.width - players[1].width;
                }
            }
            break;
        // Spacebar => Shooting the hook
        case 'NumpadAdd':        
            if (numberOfPlayers == 2) {
                players[1].shoot(); 
            }
            break;

        default :
            break;
    }
}

function keyUp(evt) {
    let code = evt.code;

    switch (code) {
        //** Player 1 **//
        // Left Arrow
        case 'KeyA':
        players[0].speed = 0;
        break;
        // Right arrow
        case 'KeyD':
            players[0].speed = 0; 
            break;

        //** Player 2 **//
        //A (azerty) or Q (qwerty)
        case 'ArrowLeft':
            if (numberOfPlayers == 2) 
                players[1].speed = 0;
            break;
        // E
        case 'ArrowRight':        
            if (numberOfPlayers == 2) 
                players[1].speed = 0; 
            break;

        default :
            break;
    }
}

function mouseMenu(evt) {

    let rect = canvas.getBoundingClientRect();

    let posX = evt.clientX - rect.left;
    let posY = evt.clientY - rect.top;

    if (state == "mainMenu") {
        if (posX >= posXButton1P &&
            posX <= posXButton1P + widthButton1P &&
            posY >= posYButton1P &&
            posY <= posYButton1P + heighthButton1P)
        {
            numberOfPlayers = 1;
            initGame1Player();
        }

        if (posX >= posXButton2P &&
            posX <= posXButton2P + widthButton2P &&
            posY >= posYButton2P &&
            posY <= posYButton2P + heighthButton2P)
        {
            numberOfPlayers = 2;
            initGame2Players();
        }
    }
}