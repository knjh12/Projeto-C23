class Ferro{
  constructor(x,y, width, height){
    
    var options={
      'restitution':0.8,
          'friction':3,
          'density':30

        
    }

    this.x=x;
    this.y=y;
    this.width=40;
    this.height=40;

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  display(){
  var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
      
  }
}