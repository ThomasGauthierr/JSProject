function keyDown(evt) {
    let code = evt.code;
    
    switch (code) {
        // Left arrow
        case 'ArrowLeft':
            player.speed = - player.maxSpeed;
            break;
        // Right arrow
        case 'ArrowRight':
            player.speed = player.maxSpeed; 
            break;
        default :
            break;
    }
}

function keyUp(evt) {
    let code = evt.code;

    switch (code) {
        case 'ArrowLeft':
        player.speed = 0;
        break;
    // Right arrow
    case 'ArrowRight':
        player.speed = 0; 
        break;
    default :
        break;
    }

}