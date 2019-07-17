// Draw Loops code along

function setup(){
    createCanvas(600, 600);
    background(0, 255,  0);
}
let posX = 0;
function draw(){    
    background(0, 255, 0); 
    ellipse (posX, 300, 30, 30);
        // noStroke();

     posX++;
}