var starImg,bgImg,fairyImg;
var star, starBody;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	sound = loadSound("sound/JoyMusic.mp3");
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage1.png");
}

function setup() {
	createCanvas(800, 750);

	sound.play();

	fairy=createSprite(400,450,100,100)
	fairy.addImage(fairyImg)
	fairy.scale=0.2


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  
if(star.y>400 && fairy.x>560){
	Matter.Body.setStatic(starBody,true);
	
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === RIGHT_ARROW){
		fairy.x+=20
		
	}

	if(keyCode === LEFT_ARROW){
		fairy.x+=-20
	}
	
}
