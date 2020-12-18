const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,base1, base2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30, block31, block32, block33, block34, block35, block36, block37, block38;
var polygon, polygonImg, slingshot;

function preload(){
  //  polygonImg = loadImage("polygon.png");
}

function setup(){
createCanvas(1200, 800);

    engine = Engine.create();
    world = engine.world;
    
    //Bodies
    ground = new Ground(800, 700, 1600, 20);
    base1 = new Ground(600, 600, 300, 10);
    base2 = new Ground(1000, 300, 240, 10);
    block1 = new Box(480, 580);
    block2 = new Box(510, 580);
    block3 = new Box(540, 580);
    block4 = new Box(570, 580);
    block5 = new Box(600, 580);
    block6 = new Box(630, 580);
    block7 = new Box(660, 580);
    block8 = new Box(690, 580);
    block9 = new Box(720, 580);
    block10 = new Box(920, 280);
    block11 = new Box(950, 280);
    block12 = new Box(980, 280);
    block13 = new Box(1010, 280);
    block14 = new Box(1040, 280);
    block15 = new Box(1070, 280);
    block16 = new Box(510,540);
    block17 = new Box(540,540);
    block18 = new Box(570,540);
    block19 = new Box(600,540);
    block20 = new Box(630,540);
    block21 = new Box(660,540);
    block22 = new Box(690,540);
    block23 = new Box(540,500);
    block24 = new Box(570,500);
    block25 = new Box(600,500);
    block26 = new Box(630,500);
    block27 = new Box(660,500);
    block28 = new Box(570,460);
    block29 = new Box(600,460);
    block30 = new Box(630,460);
    block31 = new Box(600,420);
    block32 = new Box(950,240);
    block33 = new Box(980,240);
    block34 = new Box(1010,240);
    block35 = new Box(1040,240);
    block36 = new Box(980,200);
    block37 = new Box(1010,200);

    polygon = new Polygon(100, 200);
    slingshot = new SlingShot(polygon.body, {x:150, y:200});
    Engine.run(engine);

}
function draw(){
    background(0);
    ground.display();
    base1.display();
    base2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    //block38.display();

    polygon.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}