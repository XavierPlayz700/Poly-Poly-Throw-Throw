const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

var gameState = "drag";
var poly, song;

function preload(){
  song = loadSound("yt1s.com - Rick Astley  Never Gonna Give You Up Official Music Video.mp3");
}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,160,30,40);

  block17 = new Block(670, 180, 30, 40);
  block18 = new Block(700, 180, 30, 40);
  block19 = new Block(730, 180, 30, 40);
  block20 = new Block(685, 140, 30, 40);
  block21 = new Block(715, 140, 30, 40);
  block22 = new Block(700, 100, 30, 40);

  poly = new Poly(50, 200, 40);

  slingShot = new flingMe(poly.body, {x : 150, y : 150});

  song.loop();
  
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");

  Engine.update(engine);
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  poly.display();
  slingShot.display();

}

function mouseDragged () {
  
   if (gameState === "drag"){
    Body.setPosition(poly.body, {x : mouseX, y : mouseY});
   }

}

function mouseReleased () {

    slingShot.fly();
    gameState = "release";
   
}

function keyPressed() {

   if (keyCode === 32){
      Body.setPosition(poly.body, {x : 150, y : 150});
      slingShot.attach(poly.body);
      gameState = "drag";   
   }

}