class Block{
    //Clara we dont need angle for the blocks in constructor here
      constructor(x, y, width, height) {
          var options = {
            //The restitution at 0.4 would work fine, try exploring different values.
              'restitution':0.4,
              'friction':0.0,
              //density is not needed here
              //'density':1.0
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
        }
        display(){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect( 0, 0, this.width, this.height);
          pop();
        }
  }