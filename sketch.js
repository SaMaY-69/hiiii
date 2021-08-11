
function preload(){
  //pre-load images
  pathIMG=loadImage(path.png)
  var path
  runner
}

function setup(){
  createCanvas(400,400);
  //create sprites here
}

function draw() {
  path=createSprite(200,200);
  path.addImage(pathIMG);
  path.velocityY=4;
  path.scale=1.2;

  if(path.y>400){
    path.y=hight/2;
  }
  background(0);

}
