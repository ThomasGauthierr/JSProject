class Player {
    constructor(hookNumber, x, bodyColor, hookColor) {
        this.width = 20;
        this.headLength = 20;
        this.bodyLength = 60;
        this.x = x || canvas.width / 2;
        this.y = canvas.height;
        this.headColor = 'pink';
        this.bodyColor = bodyColor || 'black';
        this.hookColor = hookColor || 'lightgrey';
        this.maxSpeed = 5;
        this.speed = 0;
        this.hookNumber = hookNumber || 1;
        this.hooks = [];
        this.totalHeight = this.bodyLength + this.headLength;

        for(let i = 0; i < hookNumber; i++) {
            this.hooks.push(new Hook(this, i));
        }
    }

    draw(ctx) {
        ctx.save();
      
        ctx.fillStyle = this.bodyColor;
        ctx.fillRect(this.x, this.y - this.bodyLength, this.width, this.bodyLength);
      
        ctx.fillStyle = this.headColor;
        ctx.fillRect(this.x, this.y - (this.headLength + this.bodyLength), this.headLength, this.width);

        ctx.restore();
    }

    move() {
        this.x += this.speed;

        if (this.x < 0) {
            this.x = 0;
            this.speed = 0;
        }

        if (this.x > (canvas.width - this.width)) {
            this.x = canvas.width - this.width;
            this.speed = 0;
        }
    }

    // Shooting the hook
    shoot() {
        if (this.hookNumber >= 1) {
            this.hooks[this.findAvailableHook()].shoot(this.x + (this.width - this.hooks[0].width)/2);
            this.hookNumber--;
        }
    }

    //Find one hook which is not thrown yet
    findAvailableHook() {
        let i = 0;
        let availableHook = 0;

        this.hooks.forEach(hook => {
            if (!hook.isShot) {
                availableHook = i;
            }
            i++;
        });

        return availableHook;
    }

}