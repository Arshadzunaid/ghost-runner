  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var gameState;
var gameState = "play";


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 8;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.5;
  ghost.addImage("ghost", ghostImg); 
}


function draw() {
  background(255);
  edges= createEdgeSprites();
  ghost.collide(edges);
  ghost.collide(climbersGroup);
  ghost.collide(doorsGroup);
 if(tower.y > 600){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left")){
        ghost.x = ghost.x - 5;

      
    }
    if(keyDown("right")){
  
          ghost.x = ghost.x + 5;

      
      
    }
    
  
     ghost.velocityY = ghost.velocityY + 0.8;
  
   
      
    
      spawnDoors();

  

     if(climbersGroup.isTouching(ghost)){
      gameState === "end"
    }
    if(doorsGroup.isTouching(ghost)){
      gameState === "end"
    }
    
    
  
  drawSprites();
  }
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250) 
    ghost.velocityY=0;
    tower.velocity=0;
  }
}

function spawnDoors()
 {
  
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
   
    
   
     door.x = random(50,550);
    door.addImage(doorImg);
    climber.addImage(climberImg);
    climber.x=door.x
    
    door.velocityY = 5;
    climber.velocityY = 5;
    

    
    
     
ghost.depth = door.depth;
    ghost.depth+=1;
    
    

 door.lifetime = 800;
    climber.lifetime = 800;
   
   
    
     doorsGroup.add(door);
    
    climbersGroup.add(climber);
   
    
  }
}

