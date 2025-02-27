let x = 1, step = 1, off = 25; // Increased spacing
let w, h, angle = 0;
let stepsInSegment = 1, segmentCount = 0;
let currentSteps = 0;

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function setup() {
  createCanvas(800, 800); // Bigger canvas
  w = width / 2;
  h = height / 2;
  background(0);
  textAlign(CENTER, CENTER);
}

function draw() {
  frameRate(60); // Slow for visualization

  if (currentSteps < stepsInSegment) {
    // Draw the circle and number
    if (isPrime(x)) fill(255, 0, 0); // Red for primes
    else fill(50);

    circle(w, h, off * 0.9); // Bigger circles
    
    fill(255);
    textSize(off * 0.5); // Dynamic text size
    text(x, w, h); // Display number

    // Move in the current direction
    w += off * cos(angle);
    h += off * sin(angle);

    x++;
    currentSteps++;
  }

  if (currentSteps >= stepsInSegment) {
    // Change direction by 120° (2π/3 radians)
    angle += TWO_PI / 3;
    segmentCount++;

    // Every 2 turns, increase step count
    if (segmentCount % 1 === 0) {
      stepsInSegment++;
    }

    // Reset steps for the next segment
    currentSteps = 0;
  }
}
