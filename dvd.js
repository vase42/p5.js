var x;
var y;
var xspeed;
var yspeed;
var bsize;
function setup() {
  createCanvas(700,500);
  x=30;
  y=30;
  xspeed=3;
  yspeed=-3;
  bsize=40;
}
function draw() {
  background(0,0,0);
  rectMode(CENTER);
  textSize(bsize);
  text('DVD', x, y);
  if(x<0||x>width-80){
    xspeed*=-1;
    fill(random(30,255),random(30,255),random(30,255));
  }
  x+=xspeed;
  if(y<30||y>height){
    yspeed*=-1;
    fill(random(30,255),random(30,255),random(30,255));
  }
  y+=yspeed;
}
