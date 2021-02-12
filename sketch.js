const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create(); //created a engine
    world = engine.world; //created world

    var ground_options ={
        isStatic: true
    }

    
   //creating box1
    box1=new Box(200,300,50,50);
    box2=new Box(220,100,10,200)
    ground1=new Ground(200,390,400,20)

    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);

    box1.display();
    box2.display();
    ground1.display();
  
}