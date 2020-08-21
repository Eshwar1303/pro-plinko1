const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,height,480,20);
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground1.display();

  drawSprites();
}