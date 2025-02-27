let x = 1, k = 1, off = 3;
let w = 350, h = 350;
let numbers = [];

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  let sqrtN = Math.sqrt(n);
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function setup() {
  createCanvas(700, 700);
  noStroke();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(12);
  fill(255);
}

function draw() {
  let i = 0;

  while (i < 2 * k) {
    if (isPrime(x)) {
      circle(w, h, off);
      numbers.push({ x: w, y: h, value: x });
    }

    if (i++ < k) w += off;
    else h += off;
    
    x++;
  }
  
  off = -off;
  k++;
  
  // Check mouse hover
  for (let num of numbers) {
    if (dist(mouseX, mouseY, num.x, num.y) < off / 2) {
      fill(0);
      text(num.value, num.x, num.y);
      console.log(num.value);
    }
  }
}
