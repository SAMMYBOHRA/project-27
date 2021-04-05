class bob {
    constructor(x,y, radius){
        var options = {
            isStatic : true,
            'restitution' : 0.3,
            'friction' : 0.1,
            'density' :1.2
        }
        this.body = Bodies.circle (x,y,radius,options);
        this.radius = radius 

        World.add (world, this.body);
    }
    display(){
        push();

        ellipseMode (RADIUS);

        fill("blue");

        circle(this.body.position.x, this.body.position.y, this.radius);

        pop()

    }

};
