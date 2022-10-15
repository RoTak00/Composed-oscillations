class OscillatorComposed
{
  constructor(_osc1, _osc2, _Color, _LineColor)
  {
    this.osc1 = _osc1;
    this.osc2 = _osc2;
    
    this.c = _Color;
    this.c2 = _LineColor;
    
    this.x = 0; this.y = 0;
    this.amp = 0;
  }
  
  Update(t)
  {
   let ampsq = this.osc1.amp * this.osc1.amp + this.osc2.amp + this.osc2.amp + 
               2 * this.osc1.amp + this.osc2.amp *
               cos((this.osc1.v - this.osc2.v) * t + (this.osc1.ph - this.osc2.ph));
   this.amp = sqrt(ampsq);
   
   let cosalpha = this.osc1.y + this.osc2.y;
   cosalpha = cosalpha / this.amp;
   
   let sinalpha = this.osc1.x + this.osc2.x;
   sinalpha = sinalpha / this.amp;
   
   this.y = this.amp * cosalpha;
   this.x = this.amp * sinalpha;
     
  }
  
  Draw()
  {
    push();
    strokeWeight(7);
    stroke(this.c);
    
    line(0, 0, this.x, this.y);
    
    strokeWeight(3);
    stroke(this.c2);
    line(0, 0, 0, this.y);
    line(0, 0, this.x, 0);
    
    pop();
  }
}
