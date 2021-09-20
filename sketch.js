const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberbol;
var iron;
var stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubberbol = new Rubber(660, 60,50)
    iron = new Iron(720,46,45)
    stone = new Stone(400,40,40)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubberbol.display();
    stone.display();
    iron.display();
    
 
}