let radiusb=20;
let sizeb=20;
let moveb=20;
let alphab=200;
let button1;

let slider1;
let slider2;
let slider3;

let sliderR;
let sliderG;
let sliderB;

let R=255;
let G=255;
let B=255;
class Bubble {
  constructor(){
    this.x=width/2;
    this.y=height/2;
  }
  move(){
    this.x+=random(-moveb,moveb);
    this.y+=random(-moveb,moveb);
    if(this.x<0){
      this.x+=5;
    }
    if(this.x>width){
      this.x-=5;
    }
    if(this.y<0){
      this.y+=5;
    }
    if(this.y>height){
      this.y-=5;
    }
  }
  show(){
    noFill();
    stroke(R,G,B,alphab);
    ellipse(this.x,this.y,radiusb);
  }
}
let bubbles=[];
function reseter(){
  background(0,0,0);
}
function setup() {
  createCanvas(1920,1076);
  for(let i=0;i<sizeb;i++){
    bubbles[i]=new Bubble();
  }
    button1 = createButton('reset');
    button1.position(10, 100);
    button1.mousePressed(reseter);

    slider1 = createSlider(0, 50, 2);
    slider1.position(10, 10);
    slider1.style('width', '200px');

    slider2 = createSlider(0, 255, 200);
    slider2.position(10, 40);
    slider2.style('width', '200px');

    slider3 = createSlider(0, 50, 2);
    slider3.position(10, 70);
    slider3.style('width', '200px');


    sliderR = createSlider(0, 255, 255);
    sliderR.position(10, 160);
    sliderR.style('width', '200px');

    sliderG = createSlider(0, 255, 255);
    sliderG.position(10, 190);
    sliderG.style('width', '200px');

    sliderB = createSlider(0, 255, 255);
    sliderB.position(10, 220);
    sliderB.style('width', '200px');
}
function draw() {
  
  background(0,0,0);
  for(let i=0;i<sizeb;i++){
    radiusb=slider1.value();
    alphab=slider2.value();
    moveb=slider3.value();
    R=sliderR.value();
    G=sliderG.value();
    B=sliderB.value();
    bubbles[i].move();
    bubbles[i].show();
  }
}
