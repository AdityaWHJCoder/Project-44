class Player {
    constructor(x,y,width,height) {
        this.image = loadImage("Images/LittleSquare.png");
      var options = {
          isStatic: false,
          'density':1,
          'friction': 0.8,
          'restitution': 0.9
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      /*this.body.position.x = mouseX;
      this.body.position.y = mouseY;*/
      stroke(0)
      strokeWeight(1);
      fill(100, 100, 100);
      
      image(this.image, pos.x, pos.y, this.width, this.height);
    }

    
  };

