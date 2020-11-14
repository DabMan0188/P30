var stand;

var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;

var polygon;

var slingshot


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  stand = new Ground(100,50,50,10);

  //level one
  block1 = new Block(330, 275, 30, 40);
  block2 = new Block(360, 275, 30, 40);
  block3 = new Block(390, 275, 30, 40);
  block4 = new Block(420, 275, 30, 40);
  block5 = new Block(450, 275, 30, 40);
  block6 = new Block(480, 275, 30, 40);
  block7 = new Block(510, 275, 30, 40);
  //level two
  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(390, 235, 30, 40);
  block12 = new Block(390, 235, 30, 40);
  //level three
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
  //top
  block16 = new Block(390, 155, 30, 40);

  polygon = bodies.circle(50,200,20);
  World.add(world,polygon);

  var slingshot = new slingshot(this.polygon, {x:100,y:200});
}

function draw() {
  background(255,255,255);  
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

  polygon.display();
  
  slingshot.display();
  drawSprites();
}

function mouseDragged()
{
Matter.body.setPosition(polygong.body,{x:mouseX, y:mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}