let healthP1 = 300;
let healthCPU = 300;
const damage = randomNumber();
const attack = 100;

function setup() {
    createCanvas(700, 500);
    background(200);
}


function draw() {
    fill(200, 49, 0);
    rect(0, height - height / 10, 200, 50); // Player1 health bar
    rect(500, height - height / 10, 200, 50);  // Computer/Player2 health bar
    fill(244, 232, 104);
    circle(100, 350, 200);//Pikachu
    fill(0);
    circle(600, 350, 200);//Computer's Pokemon
}



//*Stats for Pikachu: 100 health
//*Moveset for Pikachu: Thunder Jolt (Attack that deals 250-450 damage, depending on RNG), Shield (Absorbs 15-25 damage, based on RNG), Heal?(restores 30hp,one use only) 

//*Stats for Player1 ()
function keyPressed() {
    if (keyCode === UP_ARROW) {
        healthCPU = healthCPU - damage;
        console.log("HEALTH: " - damage);
    } else if (keyCode === DOWN_ARROW) {
        healthCPU = healthCPU - damage/2;
        console.log("HEALTH: " + healthCPU - damage);
    }
}
    

function randomNumber(){
    const number = Math.random() * 111;
    const final = Math.floor(number);
 //   return final;
    console.log("DAMAGE: " + final)
}