function setup(){
    createCanvas(500, 500);
    background(255, 0, 255);  
}

// let value = 0;

function draw(){
    fill(0);
    const button1 = rect(25, 25, 50, 50);
    fill(255);
    const button2 = triangle(150, 40, 200, 100, 100, 100);
}



// function random(){
//     for (let i = 0; i < 100; i++) {
//         let r = random(50);
//         stroke(r * 5);
//         line(50, i, 50 + r, i);
//       }
// }

// function mouseDragged(){
//   if (button1 = mouseClicked){
//   rect (mouseX, mouseY, mouseY, mouseY);
//   ellipse (mouseX, mouseY, mouseY, mouseY);
//     // value = value + 5;
//     // if (value > 255){
//     //     value = 0;
//   }else if (button2 = mouseClicked){
//       triangle (mouseX, mouseY - 15, mouseX + 15, mouseY, mouseX-15, mouseY);
//     }

// }

function mouseClicked() {
 
    if (button1 = mouseClicked){
      function mouseDragged(){
      rect (mouseX, mouseY, mouseY, mouseY);
       } 
      } else if (button2 = mouseClicked){
        function mouseDragged(){
        triangle (mouseX, mouseY - 15, mouseX + 15, mouseY, mouseX-15, mouseY);
        } } else {
          function mouseDragged(){
       ellipse (mouseX, mouseY, mouseY, mouseY);
    }
  }
}

mouseClicked();