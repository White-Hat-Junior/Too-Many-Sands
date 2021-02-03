
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

	//Create the Bodies Here.

	hammer = new Hammer(200,200, 40,10);

	plane = new Plane(200,height,1200,20);

	rubber = new Rubber(250,347, 40,40);

	stone = new Stone(150,10,50,67);

	iron = new Iron(600,300,50,80);

	sand1 = new Sand(400,400,20,300);
	sand2 = new Sand(400,400,200,10);
	sand3 = new Sand(400,400,20,60);
	sand4 = new Sand(400,400,200,60);
	sand5 = new Sand(400,400,70,30);


  
}


function draw() {


  background("lightblue");

  Engine.update(engine);
 
  hammer.display();

  plane.display();

  rubber.display();

  stone.display();

  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
 
}



