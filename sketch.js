const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot,b1;

function preload() {
    backgroundImg = loadImage("sprites/16617.jpg");
    bin = loadImage("sprites/bin.png")
}

function setup(){
    var canvas = createCanvas(1200,400)

    engine = Engine.create();
    world = engine.world;
 
    //Image(bin,800,370,300,300)

    ground = new Ground(600,height,1200,20);
    
    l1 = new Log(800,370,250,10);
    l2 = new Log(670,325,10,100);
    l3 = new Log(930,325,10,100);


    bird = new Bird(150,150);
    bird.scale = 2

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:150, y:150});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    text(mouseX + ' , '+ mouseY,40,50);
   // strokeWeight(4);
  
    ground.display();

    l1.display();
    l2.display();
    l3.display();


    bird.display();
  
    
    slingshot.display();    
   
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}