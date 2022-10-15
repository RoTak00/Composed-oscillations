class Oscillator
{
  constructor(_Amp, _Speed, _Phase, _Color, _LineColor)
  {
    this.amp = _Amp;
    this.v = _Speed;
    this.ph = _Phase;
    this.c = _Color;
    this.c2 = _LineColor;
    this.x = 0;
    this.y = 0;
  }
  
  Update(t)
  {
    this.y = this.amp * cos(this.v * t  + this.ph);
    this.x = this.amp * sin(this.v * t + this.ph);
  }
  
  Draw()
  {
    push();
    strokeWeight(5);
    stroke(this.c);
    
    line(0, 0, this.x, this.y);
    
    strokeWeight(3);
    stroke(this.c2);
    line(0, 0, 0, this.y);
    line(0, 0, this.x, 0);
    
    strokeWeight(1);
    noFill();
    ellipse(0, 0, this.amp, this.amp);
    
    pop();
  }
}
