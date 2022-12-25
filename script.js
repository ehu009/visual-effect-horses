
var imageWidth = 150;

function forceTest() {
}

function applyAnimation(horse, animation) {
    horse.node.style.animation = animation;
    horse.node.style.WebkitAnimation = animation;

    function kill() {
        horse.node.remove();
        delete horse;
    }
    horse.node.addEventListener("animationend", kill);
    horse.node.addEventListener("webkitAnimationEnd", kill);
}



class Horse {
    // a horse racing across the screen
 
    constructor(id, xPos, yPos, scale, rotated, xDirection, yDirection, duration) {
        /*
        PARAMETERS
        id, xPos, yPos : self-explanatory
        scale: ---tbd---
        rotated: true if rotated 90 degrees clockwise, otherwise false
        xDirection : negative if pointing leftwards, positive if pointing rightwards
        yDirection : negative if pointing upwards, positive if pointing downwards
        */
        this.id = id;
        this.x = xPos;
        this.y = yPos;
        this.s = scale;
        this.r = rotated;
        this.xd = xDirection;
        this.yd = yDirection;
        this.t = duration;
        this.node = null;
    }
    
    reposition() {
        this.node.style.left = this.x;
        this.node.style.top = this.y;
    }

    flip() {
        if (this.xd > 0) {
            this.node.classList.add("flipX");
        }
        if (0 > this.yd) {
            this.node.classList.add("flipY");
        }
    }

    rotate() {
        if (this.r == true) {
            this.node.classList.add("rotate90");
        }
    }

    rescale() {
        this.node.style.height = "auto";
        this.node.style.width = imageWidth * (this.s/100) + "px";
    }

    spawn() {
        let img = document.createElement("img");
        img.src = "example.jpg";
        img.id = this.id;
       
        img.classList.add("horse");

        document.getElementById("container").appendChild(img);
        this.node = img;
        this.reposition();
        this.rescale();
        this.flip();
        this.rotate();
        
    }   
}