
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  
  
  paper1 = new CrumpledPapers(200,200)
  ground = new Ground(800, 670, 1600, 20 )
  //paper1.shapeColor = "blue"
	
	
	
	//Create the Bodies Here.
	var options = {
		restitutuion : 0.5
	   }
	object = Bodies.rectangle(400, 600, 200, 20, options)
	World.add(world , object)
	  Engine.run(engine);
	  object1 = Bodies.rectangle(485, 550, 20, 100, options)
	  World.add(world , object1)
		Engine.run(engine);
		object2 = Bodies.rectangle(320, 550, 20, 100, options)
	  World.add(world , object2)
		Engine.run(engine);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  fill("red")
  rect(object.position.x , object.position.y, 200, 20)
  fill("red")
  rect(object1.position.x , object1.position.y, 20, 100)
  fill("red")
  rect(object2.position.x , object2.position.y, 20, 100)
  keyPressed();
  drawSprites();
  
 
}

function keyPressed(){
if(keyCode == UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position ,{x:15, y:-40})
}

}

