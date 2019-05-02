var x = [],
  y = [],
  segNum = 20,
  segLength = 50;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  stroke(255,255,255, 100);

}

function draw() {

  background('#08768d');
  dragSegment(0, mouseX, mouseY);
    for (let i = 0; i < x.length - 1; i++) {
      dragSegment(i + 1, x[i], y[i]);
    }
}
function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  ellipse(0,0,5,15)
  ellipse(0,-20,5,15)
  ellipse(-10,-10, 15,5)
  ellipse(10,-10,15,5)
  fill(254,215,1)
  ellipse(0,-10,8,8)
  pop();
  }
