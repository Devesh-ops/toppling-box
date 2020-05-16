class ground{
    constructor(x,y,width,height){
        var object_options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,object_options);
         this.width=width;
         this.height=height;
          
        World.add(world,this.body);
    }
        display(){
            var pos = this.body.position;
            fill("brown");
            rectMode(CENTER);
            //strokeWeight(6);
            //stroke("brown")
            rect(pos.x,pos.y,this.width,this.height);
        }
    };
    
    