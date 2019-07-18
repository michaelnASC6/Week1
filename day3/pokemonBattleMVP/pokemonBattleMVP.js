//////////////////////////
//GLOBAL VARIABLES
let healthP1 = 300;
let healthCPU = 300;
const damage = randomNumber();
let value = 0;
let squareX = 0;
let squareY = 0;

//////////////////////////

function setup() {
    createCanvas(700, 500);
    background(200);
}
function draw() {
    noLoop();
    fill(200, 49, 0);
    rect(0, height - height / 10, 200, 50); // Player1 health bar
    rect(500, height - height / 10, 200, 50);  // CPU/Player2 health barfill(255);
    
    fill(255);
    
    textSize(25);
    text('HEALTH: ' + healthP1, 0, height - 10);
    text('HEALTH: ' + healthCPU, 530, height - 10,)
    
    fill(244, 232, 104);
    circle(100, 350, 200);//Pikachu
    
    fill(0);
    circle(600, 350, 200);//Computer's Pokemon
    
    fill (value)
    rect(width/6, height/4, 75, 75);//attack button
    rect(25, height/4, 75, 75);
    
    fill(255);
    textSize(15);
    text('BLOCK-D', 33, 170);
    text('ATTACK-A', 128, 170);
    
}
//*Stats for Pikachu: 100 health
//*Moveset for Pikachu: Thunder Jolt (Attack that deals 250-450 damage, depending on RNG), Shield (Absorbs 15-25 damage, based on RNG), Heal?(restores 30hp,one use only) 

function keyPressed() {
    if (keyCode === 65) {
        // background(200);
        fill(255, 0, 0);
        textSize(70);
        text("ATTACK", width/3, height/2);
        // noLoop();
    } else if (keyCode === 68) {
        fill(0, 0, 255);
        textSize(70);
        text('BLOCK', width/3, height/2);
        // noLoop();
    }
    else if (keyCode ===74) {
        fill(255, 0, 0);
        textSize(70);
        text("ATTACK", width/3, height/2);
        // noLoop();
    }
    else if (keyCode === 76) {
        fill(0, 0, 255);
        textSize(70);
        text('BLOCK', width/3, height/2);
        // noLoop();
    }
}


function randomNumber() {
    let number = Math.random() * 100;
    let final = Math.floor(number);
    // return final;
    // text('DAMAGE: ' + final, width/2, height/2);
}