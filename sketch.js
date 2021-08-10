const E = Matter.Engine
const B = Matter.Bodies
const W = Matter.World


var sun, earth;
var ground,ball;

function setup() {
  createCanvas(800,400);

  //Creating the engine
  sun = E.create ();
  //Creating the world named earth. 
  earth = sun.world;

  // By default isStatic is false for each object.
  ground = B.rectangle (400, 380, 800, 20 , { isStatic:true })
  W.add ( earth, ground)

  //console.log("Ground :"+ ground)


  var options ={
     restitution : 3
  }
  ball = B.circle ( 400, 20, 10, options)

  W.add ( earth, ball)
  console.log(  ball)

}

function draw() {
  background(0); 

  //To keep th engine updated
  E.update( sun ) 

  // For making the objects visible

  /* To ensure the x, y of the rect shape are treated as center of 
  the shape instead of top left corner*/
  rectMode (CENTER)
  rect ( ground.position.x, ground.position.y, 800 , 20)

  ellipseMode (RADIUS)
  ellipse (ball.position.x, ball.position.y, 10, 10 )
 
 
  
}