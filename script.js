
function forceTest() {
}


class Horse {
    // a horse racing across the screen
 
    constructor(id, xPos, yPos, scale, rotation, xDirection, yDirection, xSpeed, ySpeed) {
        this.id = id;
        this.x = xPos;
        this.y = yPos;
        this.s = scale;
        this.r = rotation;
        this.xd = xDirection;
        this.yd = yDirection;
        this.xv = xSpeed;
        this.yv = ySpeed;
        this.node = null;
    }
    
}