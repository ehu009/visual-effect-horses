
var imageWidth = 150;

function forceTest() {
}

function applyAnimation(horse) {
    horse.box.style.animation = horse.animation;
    horse.box.style.WebkitAnimation = horse.animation;

    function kill() {
        horse.node.remove();
        horse.box.remove();
        delete horse;
    }
    horse.box.addEventListener("animationend", kill);
    horse.box.addEventListener("webkitAnimationEnd", kill);
}



class Horse {
    // a horse racing across the screen
 
    constructor(id, xPos, yPos, scale, xDirection, yDirection, duration) {
        /*
        PARAMETERS
        id, xPos, yPos : self-explanatory
        scale: percentage of original image size
        xDirection : negative if pointing leftwards, positive if pointing rightwards
        yDirection : negative if pointing upwards, positive if pointing downwards
        */
        this.id = id;
        this.x = xPos;
        this.y = yPos;
        this.s = scale;
        this.r = undefined;
        this.xd = xDirection;
        this.yd = yDirection;
        this.t = duration;
        this.node = null;
        this.box = null;
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
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = "example.jpg";
       
        div.classList.add("horse");

        div.appendChild(img);
        document.getElementById("container").appendChild(div);
        this.node = img;
        this.box = div;

        this.rescale();
        this.flip();
        this.reposition();
    }
       
    get animation() {
        var s = "";
        if (this.xd != 0) {
            if (this.xd < 0) {
                s += "leftwards";
            } else {
                s += "rightwards";
            }
        } else if (this.yd != 0) {
            if (this.yd < 0) {
                s += "upwards";
            } else {
                s += "downwards";
            }
        }
        s += " " + this.t + "s";
        s += " " + "linear";
    }
 
}