function setup(){
    createCanvas(500, 500);
    background(255, 0, 255);  
}

let value = 0;
function draw(){
    fill(value);
    rect(25, 25, 50, 50);

 

}

function mouseDragged(){
    ellipse (200, 200, 100, 100);
    value = value + 5;
    if (value > 255){
        vaule = 0;
    }
}

function random(){
    for (let i = 0; i < 100; i++) {
        let r = random(50);
        stroke(r * 5);
        line(50, i, 50 + r, i);
      }
}

function mouseClicked() {
  if (value <= 0) {
    value = 255;
  } else {
    value = 0;
  }
}