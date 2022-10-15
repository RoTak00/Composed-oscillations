function setup() {
  createCanvas(800, 800);
  
  angleMode(RADIANS);
  ellipseMode(RADIUS);
}
const PI = 3.14159265358979323846;

var Osc1 = new Oscillator(100, 150, 0, "red", "#aa000055");
var Osc2 = new Oscillator(100, 500, 0, "green", "#00aa0055");

var OscComp = new OscillatorComposed(Osc1, Osc2, "white", "aaaaaa55");

var Drawer = new LineDrawer(OscComp, "aaaaaa55");

function draw() {
  let currentTime = millis() / 100000;
  Osc1.Update(currentTime);
  Osc2.Update(currentTime);
  
  OscComp.Update(currentTime);
  Drawer.Update();
  
translate(width / 2, height / 2);
background(0);

push();
fill("red");
noStroke();
ellipse(0, 0, 10, 10);
pop();


Osc1.Draw();
Osc2.Draw();
OscComp.Draw();
Drawer.Draw();
}
