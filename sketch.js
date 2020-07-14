const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "ONSLING"  

var score = 0;

function setup() {
  createCanvas(800,400); 
 
  engine = Engine.create();
  world = engine.world;
 
  box1=new Box (330,235,30,40)
  box2= new Box(360,235,30,40)
  box3=new Box(390,235,30,40)
  box4=new Box(420,235,30,40)
  box5=new Box(450,235,30,40) 

  box6=new Box2(360,195,30,40)
  box7=new Box2(390,195,30,40)
  box8=new Box2(420,195,30,40)  

  box9=new Box3(390,155,30,40)

   
  box11=new Box (580,125,30,40)
  box12= new Box(610,125,30,40)
  box13=new Box(640,125,30,40)
  box14=new Box(670,125,30,40)
  box15=new Box(700,125,30,40) 

  box16=new Box2(610,85,30,40)
  box17=new Box2(640,85,30,40)
  box18=new Box2(670,85,30,40)  

  box19=new Box3(640,45,30,40)
  
 polygon1 = new polygon(150,150,20);
  
 slingshot = new SlingShot(polygon1.body,{x:200, y:200});

  ground= new Ground(200,395,1600,50) 
  stand=new Ground(405,280,170,20) 
  stand1=new Ground(655,150,170,20)
}

function draw() {
  background("#78F400");  
  
  Engine.update(engine); 
 
  fill ("black") 
  textSize(30)
 text("SCORE"+score,50,40); 

//display
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display(); 
 //display
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();  
//score
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score(); 
 //score
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score(); 

  polygon1.display(); 

  slingshot.display(); 

  ground.display();
   stand.display ();
   stand1.display();
 


  drawSprites();
} 
function mouseDragged(){
  if (gameState!=="launched"){
       Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
   }
}


function mouseReleased(){
   slingshot.fly();
   gameState = "launched"; 

} 




