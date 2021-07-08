var path,pathImg1,edges 
var runner,runnerImg
var boundary1
var boundary2

function preload(){
  //pre-load images
  pathImg1=loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png")  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(0,0)
  path.addImage(pathImg1)
  runner=createSprite(200,200)
  runner.addAnimation("running",runnerImg)

  boundary1=createSprite(22,325,10,400)
  boundary1.visible=false
  boundary2=createSprite(345,325,10,400)
  boundary2.visible=false
  edges=createEdgeSprites();
  
}
function draw (){
  background("white")
  runner.x=World.mouseX
  path.velocityY=5
  if (path.y>350){
    path.y=path.width/2}

    runner.collide(boundary1)
    runner.collide(boundary2)
    drawSprites()
  }



  



