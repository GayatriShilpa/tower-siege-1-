class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        
        this.bodyA=bodyA
        this.pointB = pointB
       console.log(options)
      //  console.log(this.bodyA.position.x, this.bodyA.position.y)
       // console.log(this.pointB.x, this.pointB.y)
        this.sling1=Matter.Constraint.create(options);
        World.add(world, this.sling1);
 

    }

    fly(){
        this.sling1.bodyA = null;
    }

  display(){

        if(this.sling1.bodyA){
            var pointA = this.sling1.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    
}