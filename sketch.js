
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImage

var balls=[]
var manheight=0;
function preload(){
  
}

function setup(){
    createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

  car=new Carsafe(400,400,200,15)
  left=new Carsafe(400,400,15,400)
  right=new Carsafe(400,400,15,400)

  man=new Man(400,620,80,200)
  ground=new Ground(400,800,799,30)
  log= new Log(404,450,120,63)

  for(i=0;i<50;i++){
    balls.push(new Ball(random(0,400),random(1,100)))
  }

	Engine.run(engine);
    
}

function draw(){
    rectMode(CENTER);
  background(120,300,-5)

man.display();
ground.display();


car.display();
left.display();
right.display();

Body.setPosition(car.body,{x:mouseX,y:400});
Body.setPosition(left.body,{x:299,y:mouseX});
Body.setPosition(right.body,{x:510,y:mouseX});
//Body.setPosition(balls[0].body,{x:mouseX,y:mouseY});

for(i=0;i<50;i++){
  balls[i].display();
  console.log(man.width/2);
   if(balls[i].body.position.x-man.body.position.x<=balls[i].radius+man.width/2 &&
    man.body.position.x-balls[i].body.position.x<=balls[i].radius+man.width/2 && 
    balls[i].body.position.y>600){
     console.log("collided");
     if(manheight<150)
      manheight=manheight+1;
     balls[i].y=0;
   }
}




  drawSprites();
  if(manheight>=150){
    text("GAMEOVER",370,300);
   
  }

  log.display();

} 

