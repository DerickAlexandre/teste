var bola;





function setup() {
  createCanvas(400,400);
bola = createSprite (200,200,50,50)

}

function draw() {
  background(30);

  drawSprites()
if(keyDown("left")){
  bola.setVelocity(-3,0)
}
if(keyDown("right")){
  bola.setVelocity(3,0)
}
if(keyDown("up")){
  bola.setVelocity(0,-3)
}
if(keyDown("down")){
  bola.setVelocity(0,3)
}



}




