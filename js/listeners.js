function keyDown(evt) {
    let code = evt.code;

    switch (code) {
        //** Player 1 **//
        // Left arrow => moving left
        case 'KeyA':
            if (state == STATE_GAME) {
                players[0].speed = - players[0].maxSpeed;
                players[0].dir = DIR_LEFT;
            }
            break;
        // Right arrow => moving right
        case 'KeyD':
            if (state == STATE_GAME) {
                if (players[0].x <= canvas.width - players[0].width) {
                    players[0].speed = players[0].maxSpeed; 
                    players[0].dir = DIR_RIGHT;
                } else {
                    x = canvas.width - players[0].width;
                }
            }
            break;
        // Numpad + => Shooting the hook
        case 'Space':
            if (state == STATE_GAME)
                players[0].shoot();
            break;


        //** Player 2 **//
        // A (azerty) or Q (qwerty) => moving left
        case 'ArrowLeft':        
            if (state == STATE_GAME) {          
                if (numberOfPlayers == 2) {
                    players[1].speed = - players[1].maxSpeed;
                    players[1].dir = DIR_LEFT;
                }
            }
            break;
        // E => moving right
        case 'ArrowRight':        
            if (state == STATE_GAME) {          
                if (numberOfPlayers == 2) { 
                    if (players[1].x <= canvas.width - players[1].width) {
                        players[1].speed = players[1].maxSpeed; 
                        players[1].dir = DIR_RIGHT;
                    } else {
                        x = canvas.width - players[1].width;
                    }
                }
            }
            break;
        // Righr Shift => Shooting the hook
        case 'ShiftRight':        
            if (state == STATE_GAME) {      
                if (numberOfPlayers == 2) {
                    players[1].shoot(); 
                }
            }
            break;

        case 'Enter' : {
            if (state == STATE_TRANSITION_LOSE) {
                state = STATE_GAME;
                resetLevel();

            } else if (state == STATE_TRANSITION_OVER) {
                stopSound(gameOverSound);
                stopSound(congratzSound);
                state = STATE_MAIN_MENU;
                playSound(menuMusic);
                requestAnimationFrame(mainMenuAnimation);

            } else if (state == STATE_TRANSITION_WIN) {
                state = STATE_GAME;
                resetLevel();
            } else {
                //Ignore it if not needed
            }
            break;
        }

        // M => back to menu
        case 'Semicolon' : 
            if (state == STATE_TRANSITION_LOSE) {
                stopSound(inGameMusic);
                state = STATE_MAIN_MENU;
                playSound(menuMusic);
                requestAnimationFrame(mainMenuAnimation);
            }

            if (state == STATE_CONTROLS) {
                state = STATE_MAIN_MENU;
                requestAnimationFrame(mainMenuAnimation);
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
            if (state == STATE_GAME)
                players[0].speed = 0;
        break;
        // Right arrow
        case 'KeyD':
            if (state == STATE_GAME)
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
    if (state == STATE_MAIN_MENU) {
        //Clic 1P button
        if (posX >= posXButton1P &&
            posX <= posXButton1P + widthButton1P &&
            posY >= posYButton1P &&
            posY <= posYButton1P + heightButton1P)
        {
            numberOfPlayers = 1;
            stopSound(menuMusic);
            initGame1Player();
        }

        //Clic 2P button
        if (posX >= posXButton2P &&
            posX <= posXButton2P + widthButton2P &&
            posY >= posYButton2P &&
            posY <= posYButton2P + heightButton2P)
        {
            numberOfPlayers = 2;
            stopSound(menuMusic);
            initGame2Players();
        }

        //Clic Controls button
        if (posX >= posXButtonControls &&
            posX <= posXButtonControls + widthButtonControls &&
            posY >= posYButtonControls &&
            posY <= posYButtonControls + heightButtonControls)
        {
            state = STATE_CONTROLS;
        }

        //Clic Mute
        if (posX >= posXmuteButton &&
            posX <= posXmuteButton + widthMuteButton &&
            posY >= posYmuteButton &&
            posY <= posYmuteButton + heightMuteButton){
                muteMusic(!mute);
                mute = !mute;

                if (!mute) {                    
                    muteImage.src = "assets/muted.png";
                } else {
                    muteImage.src = "assets/unmuted.png";
                }
            }
    }
}