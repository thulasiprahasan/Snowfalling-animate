class Boy{

    constructor(x,y,width,height){
    
        var opt={
            friction:0.5,
            density:0.5,
            restitution:0.5,
            isStatic:false
    
        }
    
    
    
        this.body = Bodies.rectangle(x,y,width,height,opt)
        this.width = width
        this.height = height
        this.image=loadImage("boy.png")
        World.add(world,this.body)
    
    
    }
    
    display(){
    
        var pos=this.body.position;
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
    
    
    
    
    
    
    }
    
    
    
    
    
    }