function keyDown(evt) {
    let code = evt.code;

    switch (code) {
        // Left arrow
        case 'ArrowLeft':
            player.speed = - player.maxSpeed;
            break;
        // Right arrow
        case 'ArrowRight':
            if (player.x <= canvas.width - player.width) {
                player.speed = player.maxSpeed; 
            } else {
                x = canvas.width - player.width;
            }
            break;
        case 'Space': 
            console.log("pewpewpew");
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