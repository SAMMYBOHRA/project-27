var rope1,bob1,bob2,bob3,bob4,bob5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImg;

function preload()
{
	bgImg = loadImage("images/bg.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Created the roof Here.

	roof = new roof(350,100,400,30);
		
    // created the bob here 

	bob1 = new bob(250,500,30);
	bob2 =new bob(310,500,30);
	bob3 =new bob(370,500,30);
	bob4 =new bob(430,500,30);
	bob5 =new bob(490,500,30);

	//created the rope here

	rope1 =new rope (bob1.body, roof.body,-100, 0);
	rope2 =new rope (bob2.body, roof.body,-50, 0);
	rope3 =new rope (bob3.body, roof.body,0, 0);
	rope4 =new rope (bob4.body, roof.body,+50, 0);
	rope5 =new rope (bob5.body, roof.body,+100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  Engine.update(engine);

  text(mouseX + ',' + mouseY,30,45);

  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  

  
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===41){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000});
	}
}



