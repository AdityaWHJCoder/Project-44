const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var backgroundImg;
var canvas;


function preload(){
  backgroundImg = loadImage("Images/GameBack.png");
}

function setup() {
  canvas = createCanvas(displayWidth , displayHeight - 110);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(displayWidth / 2, displayHeight - 210, displayWidth, 200);

  player = new Player(displayWidth / 7, displayHeight - 380, 100, 100);

  }


function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  //player.x = mouseX;
  // player.y = mouseY;

  ground.display(); 
  player.display();

  //console.log(mouseX, mouseY);
  //console.log(player.body.position);
  //console.log(mouseX);

  

  drawSprites();


}
