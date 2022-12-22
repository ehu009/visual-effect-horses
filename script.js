
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
 
    constructor(id, xPos, yPos, scale, rotation, xDirection, yDirection) {
        this.id = id;
        this.x = xPos;
        this.y = yPos;
        this.s = scale;
        this.r = rotation;
        this.xd = xDirection;
        this.yd = yDirection;
        this.node = null;
    }
    
    reposition() {
        this.node.style.left = this.x;
        this.node.style.top = this.y;
    }

    spawn() {
        let img = document.createElement("img");
        img.src = "example.jpg";
        img.id = this.id;

        img.style.height = "auto";
        img.style.width = 150 * (this.s/100) + "px";
        
        img.classList.add("horse");
        
        if (this.xd > 0) {
            img.classList.add("flipX");
        }
        if (0 > this.yd) {
            img.classList.add("flipY");
        }

        document.getElementById("container").appendChild(img);
        this.node = img;
        this.reposition();
        
    }
}