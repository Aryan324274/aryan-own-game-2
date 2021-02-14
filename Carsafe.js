class Carsafe {
    constructor(x,y,width,height) {
      var options = {
         isStatic:true,
          friction:0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
  
      this.width = width;
      this.height = height;
      this.image=loadImage("car2.png");
      World.add(world, this.body);

      
    }
    display(){
        push();
       
      // this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
     //image(this.image,pos.x,pos.y)
     pop();

    }
  };
