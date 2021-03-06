class Box {
  constructor(x, y, width, height) {
    var options = {
       isStatic : true 
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/bin.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
  
    image(this.image,pos.x, pos.y, this.width, this.height);
    pop();
  }
};
