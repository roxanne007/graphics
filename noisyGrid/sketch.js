var stepSize = 20;

function setup() {
  createCanvas(500, 500);
    rectMode(CENTER)
    
 let spacing = 20;
 let cellSize = 15;
  let offset = 15;
}

  colorGrid();
  compassGrid();


    
    

function draw() {
  background(0);
  fill(255);
//  stroke(0);    
let from = color(218, 165, 32);
let to = color(72, 61, 139);
rectMode(CENTER);
  
  let spacing = 20;
  let cellSize = 15;
  let offset = 15;
  translate(spacing/25, spacing/25 );
  for(let x=0; x<width; x+=spacing) {
    for(let y=0; y<height; y+=spacing) {
      // use remapped grid position as noise input
      let offsetX = map(noise(x/200 + frameCount/100), 0, 1, -offset, offset);
      let offsetY = map(noise(y/200 + frameCount/100), 0, 1, -offset, offset);
      let dotScale = noise(x/100 + frameCount/100, y/100 + frameCount/100);
      
  }
  }
function colorGrid(){
}

function compassGrid(){
    
    // draw grid with offset
      rect(x + offsetX, y + offsetY, cellSize * dotScale, cellSize * dotScale);
    }
}
}
    
    