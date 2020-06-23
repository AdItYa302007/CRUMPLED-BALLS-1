


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(1500, 700);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1 = new Dustbin(1000,535,200,20);
  dustbin2 = new Dustbin(900,495,20,100);
  dustbin3 = new Dustbin(1100,495,20,100);
  ground1 = new Ground(400,550,1900,15);
  paper = new Paper(100,520,30);
  }

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  paper.display();
 }

function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
  }
}




