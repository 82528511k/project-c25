class paper{
    constructor(x,y,radius){
        var options= {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius
        this.image=loadImage("paper.png")

        World.add(world,this.body)
    
    }
    display(){
        ellipseMode(RADIUS)

        fill("red")
        circle(this.body.position.x,this.body.position.y,this.radius)
        imageMode(RADIUS)
        image(this.image,100, 600,this.radius);
    }
}