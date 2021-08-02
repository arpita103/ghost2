var tower,towerImage,ghost,ghostImage,door,doorImage;
function preload(){
  towerImage=loadImage ("tower.png");
  ghostImage =loadImage("ghost-standing.png");
  doorImage =loadImage("door.png");
  
}
function setup(){
createCanvas (600,600) ;
  tower=createSprite(300,300);
  tower.addImage("towerImage",towerImage);
  tower.velocityY=1;
  ghost =createSprite(200,200,50,50);
  ghost.addImage("ghostImage",ghostImage);
  ghost.scale=0.4;
  
}
function draw(){
  background(0);
  if(tower.y>400){
    tower.y=300;
    
  }
 if(keyDown("space")){
   ghost.velocityY =-4;
   
 } 
 ghost.velocityY = ghost.velocityY +0.3; 
  if(keyDown("left_arrow")){
    
    ghost.x =ghost.x-3;
    
  }
  if(keyDown("right_arrow")){
    ghost.x =ghost.x+4;
    
  }
  wooddoor();
drawSprites();
  
}
function wooddoor(){
  if(frameCount%240==0){
   door= createSprite (200,-50);
    door.addImage("doorImage",doorImage);
    
    door.velocityY=2;
    door.lifetime=600;
    door.x =Math.round(random(120,400))
      
      
    
  }
}