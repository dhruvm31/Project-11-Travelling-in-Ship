var ship, ship_moving;
var sea, sea_moving;

function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_moving = loadImage("sea.png")
}

function setup(){
  createCanvas(800,800);

  sea = createSprite(400,400,800,800);
  sea.addAnimation("running",sea_moving);
  sea.velocityX=-1;
  sea.scale=0.5

ship = createSprite(100,700,20,50);
ship.addAnimation("running",ship_moving);
edges = createEdgeSprites();
ship.scale=0.5;
ship.X = 90;
ship.y = 700;
}


function draw() {
  background("blue");
  if(keyDown("right")){
    ship.velocityX = 5
  }
  if(keyDown("left")){
    ship.velocityX = -5
  }
  if(keyDown("space")){
    ship.velocityX = 0
  }
  if (sea.x<0){
     sea.x=sea.width/2;
   }
   ship.collide(edges[3])
 drawSprites();
}