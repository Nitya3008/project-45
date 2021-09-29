var blueBox;
var redBox;
var greenBox;
var yellowBox;


function preload(){
  backgroundImg=loadImage("background.jpg")
  blueBox=loadImage("blue box.jpg");
  redBox=loadImage("red box.jpg");
 greenBox=loadImage("green box.jpg");
  yellowBox=loadImage("yellow box.jpg");
}
function setup() {
  createCanvas(1300,680);
 box=createSprite(300,500,100,50);
 box.velocityY=2;
// box.addImage("blueBox1",blueBox);
 var rand = Math.round(random(1,4));
   switch(rand) {
      case 1: box.addImage(blueBox);
              break;
      case 2: box.addImage(greenBox);
              break;
      case 3:box.addImage(redBox);
              break;
     case 4: box.addImage(yellowBox);
            break;
      default: break;
    }

    if(keyDown=LEFT_ARROW){
      box.velocityX=2;
  }
  
    if(keyDown=RIGHT_ARROW){
      box.velocityX=-2;
    }
}

function draw() {
  background(backgroundImg);
 // box.display();  
  drawSprites();
}