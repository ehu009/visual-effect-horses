# visual-effect-horses
dumb visual effect for e.g. OBS or other streaming software

Occasionally animates a horse moving acrossing the screen.
Assumes the image used is facing leftwards.

Parametres regarding image and animation can be set in the `script.js` file:
```javascript
const imagePath = "horse.png";  //  path to image file

const minDuration = 3;          //  minimum animation duration (seconds)
const maxDuration = 10;         //  maximum animation duration (seconds)

const minScale = 40;            //  minimum image scale (percentage)
const maxScale = 80;            //  maximum image scale (percentage)
```

Parametres regarding spawn rate can be set in `horfse.html`:
```javascript
const decisionInterval = 1000;      //  milliseconds
const horseProbability = 25;        //  percentage
```
