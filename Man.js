class Man {
   constructor(x,y,width,height) {
     var options = {
        isStatic:true,
         friction:0.4
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     this.image=loadImage("Aryan.png");
     World.add(world, this.body);
   }
   display(){
       push();
    
     
     var pos =this.body.position;
     rectMode(CENTER);
     fill("grey");
    // rect(pos.x, pos.y, this.width, this.height+manheight);
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.width+200,this.height+manheight+60)
    pop();

   }
 };


