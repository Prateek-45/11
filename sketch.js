
var trex ,trex_running;
function preload(){
  

}

function setup(){
  createCanvas(600,200)
  var ground=createSprite(200,100,400,200);
  
  //create a trex sprite
 trex=createSprite(50,160,20,50);
 addAnimation=("running" , trex_running);
 trex.scale=0.5;
}

function draw(){
  background("white")
  if(keyDown("space")){
  trex.velocityY=-10;
  }
  trax.velocityY=trex.velocityY +0.5;
  trex.collide(ground)

}
drawSprite();
