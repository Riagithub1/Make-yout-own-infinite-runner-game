var girl; 
var girlimage;
var ground;
var bg;
var bgimg;
var rockimg, cloud;
var zombie;
var zombieimg;

function preload(){
girlimage = loadImage ("womanrunning.png");
bgimg = loadImage ("realforest.jpeg");
rockimg = loadImage ("rock.jpeg");
zombieimg = loadImage ("zombie.jpg");
}

function setup() {
    createCanvas(1200, 600);
    bg = createSprite (600,300);
    bg.addImage(bgimg);
    bg.scale = 1.95;
    bg.velocityX = -9;
    girl = createSprite (600,550, 40, 40);
    girl.addImage(girlimage);
    girl.scale = 0.6;
    ground = createSprite(200,580,1200,50);
    ground.visible = false;
    ground.x = ground.width /2;
    zombie = createSprite (250,450, 40, 40);
    zombie.addImage(zombieimg);
    zombie.scale = 0.1;

}

function draw() {
background ("green");
if(keyDown("space")&& girl.y >= 100) {
    girl.velocityY = -12;
}
girl.velocityY = girl.velocityY + 0.8;
if (bg.x<0) {
    bg.x = width/3;
}
girl.collide(ground); 
spawnClouds();
drawSprites();
}

function spawnClouds() {
    //write code here to spawn the clouds
   if (frameCount % 120 === 0) {
      var cloud = createSprite(600,500,40,10);
      cloud.y = Math.round(random(500,550));
      cloud.addImage(rockimg);
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = girl.depth;
      girl.depth = girl.depth + 1;
      
      //add each cloud to the group
     // cloudsGroup.add(cloud);
    }
  }
  
  