const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ferro1, borracha,pedra;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    ferro1= new Ferro(300,200, 60,60);
    borracha= new Rubber(400,300,50);
    pedra= new Stone(500,300,50,50);
    hammer= new Hammer(100,400);


    console.log(ferro1.positionX);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    ferro1.display();
    pedra.display();
    hammer.display();
    borracha.display();
   
    
    
 
}