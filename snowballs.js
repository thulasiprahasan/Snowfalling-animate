class Snowball{
    constructor(x,y,r){
    
        var myOpt={
            isStatic:true,
            restitution:0,
            friction:1,
            density:6
        }
    
    
        this.body=Bodies.circle(x,y,r,myOpt)
        this.r=r
    
        this.image=loadImage("snow4.webp")
    
        World.add(world,this.body)
    }
    
    display(){
        var pos=this.body.position
    
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
    
    
        
    }
    
    
    
    
    }