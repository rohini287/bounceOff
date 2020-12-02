var box1,box2;
var box3,box4;

function setup() {
  createCanvas(800,400);
 box1= createSprite(0, 200, 20, 50);
 box2=createSprite(800,200,70,70);
 
 box3= createSprite(400, 0, 20, 50);
 box4=createSprite(400,400,70,70);
 box1.shapeColor="green";
 box2.shapeColor="green";
 
 box1.debug=true;
 box1.velocityX=+3;
 box2.debug=true;
 box2.velocityX=-3;

 box3.velocityY = 3;
 box4.velocityY = -3;
 
}

function draw() {
  background(0);  
 // box1.x=mouseX;
 // box1.y=mouseY;
//function with parameter
bounceOff(box1,box2);
bounceOff(box3,box4);
  drawSprites();
}


//function definition
function bounceOff(object1,object2){
  if (object1.x-object2.x<object2.width/2+object1.width/2
       && object2.x-object1.x<object2.width/2+object1.width/2){
         object1.velocityX = object1.velocityX * (-1);
         object2.velocityX = object2.velocityX * (-1);
       }
   if(object1.y-object2.y<object2.height/2+object1.height/2
   && object2.y-object1.y<object2.height/2+object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
   }
   
}


//function with argument list