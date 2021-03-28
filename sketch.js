
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,bin1,bin2,bin3,paperObject

function preload()
{
	binimage = loadImage('bin.png');
	bcgImage = loadImage('bcg.jpg')
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	bin1 = new Dustbin(1100,495,150,15);
	bin2 = new Dustbin(1185,420,15,170);
	bin3 = new Dustbin(1015,420,15,170);
	
	ground = new Ground(700,550,1400,30);
	
	paperObject = new Paper(200,300);
	
	 Engine.run(engine);
	 
	 launcher= new launcher(paperObject.body,{x:200,y:100});
}

function draw() {
	background(bcgImage);
	Engine.update(engine);
	
	
	fill ("brown");
	ground.display();

	bin3.display();
	bin1.display();
	bin2.display();
	image(binimage,1000,330,200,200);
	paperObject.display();

	launcher.display();    
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:110,y:-110});

		}
	}

	function mouseDragged(){
		Matter.Body.setPosition(paperObject.body,{x:mouseX , y:mouseY})
	}
	
	function mouseReleased(){
		launcher.fly();
	}
	