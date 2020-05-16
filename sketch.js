const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1;
var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(235,50,50,100);
    box2 = new box(200,200,50,50);
    ground1 = new ground(200,height,400,20);
}

function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
    box2.display();
   ground1.display();     
} 