export default function sketch (p){ 
    var n = 0;
    var c = 4;
    var height = 400; 
    var width = 400; 
    
    
    p.setup = function (){
    
        p.createCanvas(height, width);
        p.angleMode(p.DEGREES);
        p.colorMode(p.HSB);
        p.background(0);
    }
    
    p.draw = function (){
        var a = n * 137.5;
        var r = c * p.sqrt(n);
    
        var x = r * p.cos(a) + width/2;
        var y = r * p.sin(a) + height/2;
    
        p.noStroke();
        p.fill(n%256, 255, 255);
        //can do a%, n%, (a-r)% to change color
        //can change size of circles -- larger to middle smaller ouside or soemthigng
        p.ellipse(x, y, 4, 4);
        n++;
    }
}





