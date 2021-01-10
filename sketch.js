const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
polygon_img=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    box1=new Box(370,275,30,40);
    box2=new Box(400,275,30,40);
    box3=new Box(430,275,30,40);
    box4=new Box(460,275,30,40);
    box5=new Box(490,275,30,40);
    box6=new Box(520,275,30,40);
    box7=new Box(550,275,30,40);
    box8=new Box(430,235,30,40);
    box9=new Box(460,235,30,40);
    box10=new Box(490,235,30,40);
    box11=new Box(520,235,30,40);
    box12=new Box(400,235,30,40);
    box13=new Box(430,195,30,40);
    box14=new Box(460,195,30,40);
    box15=new Box(490,195,30,40);
    box16=new Box(460,155,30,40);

    box17=new Box(830,235,30,40);
    box18=new Box(860,235,30,40);
    box19=new Box(890,235,30,40);
    box20=new Box(920,235,30,40);
    box21=new Box(800,235,30,40);
    box22=new Box(830,195,30,40);
    box23=new Box(860,195,30,40);
    box24=new Box(890,195,30,40);
    box25=new Box(860,155,30,40);

    ground=new Ground(450,305,300,20);
    ground2=new Ground(850,266,270,20)

    polygon= Bodies.circle(100,200,20,{isStatic:false,density:0.8});
    World.add(world,polygon);
     
  slingshot=new SlingShot(polygon,{x:100,y:100})

    Engine.update(engine);
}

function draw(){
    background("black");


    
    push();
    stroke("white")
    fill("red");
    //last row
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("yellow");
    // last 2nd row
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
   fill("purple");
   //2nd row
    box13.display();
    box14.display();
    box15.display();
    fill("green");
    //1st row
    box16.display();

    fill("indigo")
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display()
    fill("teal")
    box22.display();
    box23.display();
    box24.display();
    fill ("light blue")
    box25.display();
    pop();
    

    
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    
    slingshot.display();

ground.display();
ground2.display();

    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}