
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var girl;
var ground;
// var rope1;
 var snowfall1,snowfall2,snowfall3,snowfall4,snowfall5,snowfall6,snowfall7,snowfall8,snowfall9,snowfall10;
var boy;

function preload(){
backgroundImg=loadImage("snow1.jpg")
jump=loadSound("jumpsound.mp3")

}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

  girl= new Girl(1000,450,100,200)
  boy = new Boy(240,440,100,200)
  ground = new Ground(650,550,1300,15)
  snowfall1=new Snowball(100,300,50,50);
  snowfall2=new Snowball(300,600,50,50);
  snowfall3=new Snowball(500,500,50,50);
  snowfall4=new Snowball(700,350,50,50);
  snowfall5=new Snowball(900,150,50,50);
  snowfall6=new Snowball(1100,400,50,30);
  snowfall7=new Snowball(1200,24,50,30);
  snowfall8=new Snowball(80,400,30,50);
  snowfall9=new Snowball(200,24,50,50);
  snowfall10=new Snowball(400,24,50,50);
  //snowfall1=new Snowball(170,450,30,30);
  
  //rope= new Rope(snowball.body,{x:205,y:480})

 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);
  textSize(25)
  fill("black")
  text("press space to make the boy jump.",50,50)
  text("press U to make the girl jump.",500,50)

  girl.display();
  boy.display();
  ground.display();
  //rope.display();
  snowfall1.display();
  snowfall2.display();
  snowfall3.display();
  snowfall4.display();
  snowfall5.display();
  snowfall6.display();
  snowfall7.display();
  snowfall8.display();
  snowfall9.display();
  snowfall10.display();
  //drawSprites();
}

function keyPressed(){
  if(keyCode===85){
    Matter.Body.setPosition(girl.body,{x:1000,y:450-100})
    if (!jump.isPlaying()){
      jump.play();
    }
  }

}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(boy.body,{x:240,y:450-100})
    if (!jump.isPlaying()){
      jump.play();
    }
  }

}

// function mouseDragged(){
// 	Matter.Body.setPosition(snowball.body,{x:mouseX,y:mouseY})
// }

// function mouseReleased(){
// 	rope.fly()
// }

// function keyPressed(){
// 	if(keyCode===82){
// 		Matter.Body.setPosition(snowball.body,{x:170,y:450})
// 		rope= new Rope(snowball.body,{x:205,y:480})
// 	}
// }