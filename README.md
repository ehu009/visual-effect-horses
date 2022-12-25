# visual-effect-horses
dumb visual effect for e.g. OBS or other streaming software

Occasionally animates a horse crossing the screen.
Assumes the image used is facing leftwards.

Parametres regarding image and animation can be set in the `script.js` file:
```javascript
const imagePath = "horse.png";  //  path to image
const imageWidth = 270;         //  width of original image

const minDuration = 3;          //  minimum animation duration
const maxDuration = 10;         //  maximum animation duration

const minScale = 40;            //  minimum image scale
const maxScale = 80;            //  maximum image scale
```

Parametres regarding spawn rate can be set in `horfse.html`:
```javascript
const decisionInterval = 1000;      //  milliseconds
const horseProbability = 25;        //  percentage
```
