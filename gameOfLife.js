function make2D(x,y){
  let arr = new Array(x);
  for(let i = 0; i < x; i++){
    arr[i] = new Array(y);
  }
  return arr;
}
let grid;
let col;
let row;
let resolution = 10;
function setup(){
  createCanvas(700,700);
  col = width / resolution;
  row = height / resolution;
  grid = make2D(col, row);
  for(let i = 0; i < col; i++){
    for(let j = 0; j < row; j++){
      grid[i][j] = floor(random(2));
    }
  }
}
function draw(){
  frameRate(30);
  background(0);
  //drawing
  for(let i = 0; i < col; i++){
    for(let j = 0; j < row; j++){
      let x = i * resolution;
      let y = j * resolution;
      if(grid[i][j]){
          fill(255); } else {
        fill(0); }
      rect(x,y,resolution,resolution);
    }
  }
  //processing
  let next = make2D(col, row);
  for(let i = 0; i < col; i++){
    for(let j = 0; j < row; j++){
      let nb = calculatePosition(grid, i, j);
      //testing
      // fill(255,0,0);
      // text(grid[i][j],i*resolution+6,j*resolution+15);
      if(grid[i][j] == 0 && nb == 3){
        next[i][j] = 1;
      } else if(grid[i][j] == 1 && (nb > 3 || nb < 2)){
        next[i][j] = 0;
      } else {
        next[i][j] = grid[i][j];
      }
    }
  }
  grid = next;
}

function calculatePosition(grid, x, y){
  let sum = 0;
  for(let i = -1; i < 2; i++){
    for(let j = -1; j < 2; j++){
      let cols = (x + i + col) % col;
      let rows = (y + j + row) % row;
      sum += grid[cols][rows];
    }
  }
  sum -= grid[x][y];
  return sum;
}
