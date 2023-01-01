
// image and animation parametres
const imagePath = "horse.png";  //  path to image
const imageWidth = 270;         //  width of original image

const minDuration = 3;          //  minimum animation duration (seconds)
const maxDuration = 10;         //  maximum animation duration (seconds)

const minScale = 40;            //  minimum image scale
const maxScale = 80;            //  maximum image scale






class Horse {
    
    // a horse racing across the screen
 
    constructor(xPos, yPos, scale, xDirection, yDirection, duration) {
        
        /*
        PARAMETERS
        xPos : negative if left side, positive if right side
        yPos : negative if on top, positive if on bottom
        scale : percentage of original image size
        xDirection : negative if pointing leftwards, positive if pointing rightwards
        yDirection : negative if pointing upwards, positive if pointing downwards
        duration : length of animation (seconds);
        */
        this.x = xPos;
        this.y = yPos;
        this.s = scale;
        this.xd = xDirection;
        this.yd = yDirection;
        this.t = duration;

        this.node = null;   // image node
        this.box = null;    // container for image
        
        this.spawn();

    }
    
    reposition() {

        // positions the horse outside window bounds
        let x = 0;
        let y = 0;
        
        if (this.yd != 0) {
            if (this.x > 0) {
                x = window.innerWidth - ((this.node.height/2) + (this.node.width/2));
            } else if (this.x < 0) {
                x = (this.node.height/2) - (this.node.width/2);
            }
        } else if (this.xd != 0) {
            if (this.y > 0) {
                y = window.innerHeight - this.node.height;
            } else if (this.y < 0) {
                // do nothing
            }
        }

        this.box.style.left = x;
        this.box.style.top = y;

    }

    flip() {

        // makes sure the horse is facing the right way, depending on movement and position
        if (this.y != 0) {
            // horizontal movement
            if (this.y < 0) {
                // top
                if (this.xd < 0) {
                    // leftwards
                    this.node.classList.add("flipY");
                } else if (this.xd > 0) {
                    // rightwards
                    this.box.classList.add("rotate180");
                }
            } else if (this.y > 0) {
                // bottom
                if (this.xd < 0) {
                    // leftwards
                } else if (this.xd > 0) {
                    // rightwards
                    this.node.classList.add("flipX");
                }
            }
        } else if (this.x != 0) {
            // vertical movement
            if (this.x < 0) {
                // left
                if (this.yd < 0) {
                    // upwards
                    this.box.classList.add("rotate90");
                } else if (this.yd > 0) {
                    // downwards
                    this.node.classList.add("flipX");
                    this.box.classList.add("rotate90");
                }
            } else if (this.x > 0) {
                // right
                if (this.yd < 0) {
                    // upwards
                    this.box.classList.add("rotate90");
                    this.node.classList.add("flipY");
                } else if (this.yd > 0) {
                    // downwards
                    this.box.classList.add("rotate270");
                }
            }
        }

    }


    rescale() {

        // scales the image, provided original width is specified
        this.node.style.height = "auto";
        this.node.style.width = imageWidth * (this.s/100) + "px";

    }

    spawn() {
        
        // puts a horse image on screen
        let div = document.createElement("div");
        document.getElementById("container").appendChild(div);
        div.classList.add("horse");
        this.box = div;

        let img = document.createElement("img");
        img.src = imagePath;
        div.appendChild(img);
        this.node = img;
        

        this.rescale();
        this.flip();
        this.reposition();
        applyAnimation(this);

    }
       
    get animation() {

        // returns a string representing a CSS animation
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
        return s;

    }
 
}

function applyAnimation(horse) {

    // applies animation to a horse
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

function randomHorse() {

    // creates a randomized horse instance
    let scale = (Math.random()*(maxScale-minScale)) + minScale;
    let duration = (Math.random()*(maxDuration-minDuration)) + minDuration;

    let xdir = 0;
    let ydir = 0;

    let xpos = 0;
    let ypos = 0;

    let r = Math.random()*100;
    if (r >= 50) {
        // horizontal movement
        r = Math.random()*100;
        if (r >= 50) {
            // top
            ypos = -1;
        } else {
            // bottom
            ypos = 1;
        }
        r = Math.random()*100;
        if (r >= 50) {
            // rightwards
            xdir = -1;
        } else {
            // leftwards
            xdir = 1;
        }
    } else {
        // vertical movement
        r = Math.random()*100;
        if (r >= 50) {
            // right
            xpos = -1;
        } else {
            // left
            xpos = 1;
        }
        r = Math.random()*100;
        if (r >= 50) {
            // upwards
            ydir = -1;
        } else {
            // downwards
            ydir = 1;
        }
    }
    
    new Horse(xpos, ypos, scale, xdir, ydir, duration);

}
