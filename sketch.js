function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
 
}

function draw() {
  background(0);
  
 hr = hour();
 mn = minute();
 sc = second();
  
  translate(200,200);
  rotate(-90);

  strokeWeight(8);
  stroke("blue");
  noFill();
  var sec = map(sc,0,60,0,360);
  arc(0,0,300,300,0,sec);

  push();
  rotate(sec);
  strokeWeight(7);
  stroke("blue");
  line(0,0,100,0);
  pop();

  strokeWeight(8);
  stroke("yellow");
  noFill();
  var min = map(mn,0,60,0,360);
  arc(0,0,280,280,0,min);

  push();
  rotate(min);
  strokeWeight(7);
  stroke("yellow");
  line(0,0,75,0);
  pop();

  strokeWeight(8);
  stroke("red");
  noFill();
  var h = map(hr,0,12,0,360);
  arc(0,0,260,260,0,h);

  push();
  rotate(h);
  strokeWeight(7);
  stroke("red");
  line(0,0,50,0);
  pop();

}