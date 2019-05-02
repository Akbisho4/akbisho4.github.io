let x = -50;
let a = 50
let b = 50
let c = 50
let d = 50

function setup() {
  createCanvas(765, 400);
}

function draw() {
  background(220);
  
  
  let y = sin(frameCount*0.1) * 80.0;
  x = x + 3
  
  if (x > 850){
    x = -100;
    a = 50
    b = 50
    c = 50
    d = 50
  }
  fill(80)
  ellipse(x - 100, 200 + y, 50, 50);
  
  fill(a)
  rect(35, 295, 150, 100)
  
  fill(b)
  rect(35 + 180, 295, 150, 100)
  
  fill(c)
  rect(215 + 180, 295, 150, 100)
  
  fill(d)
  rect(395 + 180, 295, 150, 100)
  
  textSize(32);
  text('Home', 35, 325);
  fill(50);
  
  if (x > 165){
    a = a + 20
  }
  if (x > 345){
    b = b + 20
  }
  if (x > 525){
    c = c + 20
  }
  if (x > 705){
    d = d + 20
  }
}

