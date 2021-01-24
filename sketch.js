const Engine = Matter.Engine;
const World = Matter.World ;
const Bodies = Matter.Bodies ;
var myEngine , myWorld , ball , ground ;
function setup() {
  createCanvas(400,400);
 myEngine = Engine.create ();
 myWorld = myEngine.world ;
 
 var options = {
   isStatic:true
 }
 ground = Bodies.rectangle(200, 380, 400, 20 , options )
 World.add(myWorld,ground)
 var option1 = {
  restitution : 1.4
 }
 ball = Bodies.circle(200, 200,40,option1)
 World.add(myWorld,ball)
 console.log (ball)
}

function draw() {
  background(0);  
  Engine.update(myEngine)
  rectMode(CENTER)
  rect (ground.position.x , ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)
}