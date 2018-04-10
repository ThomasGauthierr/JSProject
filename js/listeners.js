function keyDown(evt) {
    let code = evt.code;

    switch (code) {
        // Left arrow => moving left
        case 'ArrowLeft':
            player.speed = - player.maxSpeed;
            break;
        // Right arrow => moving right
        case 'ArrowRight':
            if (player.x <= canvas.width - player.width) {
                player.speed = player.maxSpeed; 
            } else {
                x = canvas.width - player.width;
            }
            break;
        // Spacebar => Shooting the hook
        case 'Space':
            player.shoot();
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