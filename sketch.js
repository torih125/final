let noiseMax = 0.5;
let slider;
let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noFill()
  strokeWeight(7)
  const steps = 0.004

  let myColor = color("#ff7ff2");
  myColor.setAlpha(10)

  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    stroke(myColor)
    translate(width / 2, height / 2);
    beginShape();
        for (let a = 0; a < TWO_PI; a += 0.01) {
            let xoff = map(cos(a), -1, 1, 0, 5);
            let yoff = map(sin(a), -1, 1, 0, 5);
            
            let r = map(noise(xoff, yoff, zoff), 0, 1, 100,300);
            let x = cos(a) * r;
            let y = sin(a) * r;
            vertex(x, y);
        }
    endShape(CLOSE);
    zoff += 0.004;
  }
}
