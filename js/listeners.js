function keyDown(evt) {
    let code = evt.code;

    switch (code) {
        //** Player 1 **//
        // Left arrow => moving left
        case 'ArrowLeft':
        players[0].speed = - players[0].maxSpeed;
            break;
        // Right arrow => moving right
        case 'ArrowRight':
            if (players[0].x <= canvas.width - players[0].width) {
                players[0].speed = players[0].maxSpeed; 
            } else {
                x = canvas.width - players[0].width;
            }
            break;
        // Numpad + => Shooting the hook
        case 'NumpadAdd':
            players[0].shoot();
            break;


        //** Player 2 **//
        // A (azerty) or Q (qwerty) => moving left
        case 'KeyQ':
            players[1].speed = - players[1].maxSpeed;
            break;
        // E => moving right
        case 'KeyE':
            if (players[1].x <= canvas.width - players[1].width) {
                players[1].speed = players[1].maxSpeed; 
            } else {
                x = canvas.width - players[1].width;
            }
            break;
        // Spacebar => Shooting the hook
        case 'Space':
        players[1].shoot();

        default :
            break;
    }
}

function keyUp(evt) {
    let code = evt.code;

    switch (code) {
        //** Player 1 **//
        // Left Arrow
        case 'ArrowLeft':
        players[0].speed = 0;
        break;
        // Right arrow
        case 'ArrowRight':
            players[0].speed = 0; 
            break;

        //** Player 2 **//
        //A (azerty) or Q (qwerty)
        case 'KeyQ':
        players[1].speed = 0;
        break;
        // E
        case 'KeyE':
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

    if (posX >= posXButton1P &&
        posX <= posXButton1P + widthButton1P &&
        posY >= posYButton1P &&
        posY <= posYButton1P + heighthButton1P)
    {
        initGame();
    }

    if (posX >= posXButton2P &&
        posX <= posXButton2P + widthButton2P &&
        posY >= posYButton2P &&
        posY <= posYButton2P + heighthButton2P)
    {
        initGame();
    }
}