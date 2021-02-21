class Ground {
  //Clara ground can be created with constant height and width
    constructor() {
      var g_options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,g_options);
      //since we are giving in constant values we can work without the width and height
      //this.width = width;
      //this.height = height;
      World.add(world, this.ground);
    }
    display(){
      var pos =this.ground.position;
     
      fill(91,153,3);
      rectMode(CENTER);
      rect(pos.x, pos.y, 900,20);
    }
  };