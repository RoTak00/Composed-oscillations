class LineDrawer
{
 constructor(_osc, _Color)
 {
   this.osc = _osc;
   this.points = [];
   
   this.c = _Color;
 }
 
 Update()
 {
  if(this.points.length < 5000){
    this.points.push({x: this.osc.x, y: this.osc.y}); 
  }
 }
 
 Draw()
 {
   push(); 
   strokeWeight(2);
   stroke(this.c);
   for(let i = 0; i < this.points.length - 1; ++i)
   {
     line(this.points[i].x, this.points[i].y, this.points[i+1].x, this.points[i+1].y);
   }
    pop();
 }
}
