var ball;
var rect1,rect2,rect3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);



	var ball = createSprite =(width/2,200,20,20);
ball.shapeColor = ("red");

var ground = createSprite(width/2,height-35, width,10);
groundSprite.shapeColor=color(255)


    rect1 = createSprite(width/2-100,600,15,120);
	rect1.shapeColor = "red";

	rect2 = createSprite(width/2,660,200,15);
	rect2.shapeColor = "red";

	rect3 = createSprite(width/2+100,600,15,120);
	rect3.shapeColor = "red";

	leftBody = Bodies.rectangle(width/2-80,600,15,120 ,{isStatic:true});
	World.add(world,leftBody);

	bottomBody = Bodies.rectangle(width/2,660,200,15, {isStatic:true});
	World.add(world,bottomBody);

	rightBody = Bodies.rectangle(width/2+100,600,15,120, {isStatic:true});
	World.add(world,rightBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2

  }

  function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		matter.Body,applyForce
  
  drawSprites();(paperObject.body.paperObject.body.psition,{x:85,y:-85});

	}
}
 
}
  


