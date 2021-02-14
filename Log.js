class Log {
    constructor(x,y,width,height) {
      var options = {
        isStatic:true,
          friction:0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("car9.png");
      World.add(world, this.body);
    }
    display(){
        push();
      var pos =this.body.position;
     rectMode(CENTER);
      fill("grey");
      //rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
     image(this.image,470,480,700,600)
     pop();
 
    }
  };