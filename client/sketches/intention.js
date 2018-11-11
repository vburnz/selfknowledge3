export default function sketch (p) { 


    var angle = 0;
    // var slider;
    var height = 400; 
    var width = 400; 

    p.setup = function() {
        p.createCanvas(height, width);
        // slider = createSlider(0, p.TWO_PI, p.PI/4, 0.01);
    }

    p.draw = function() {
        p.background(51);
        angle = p.PI/3; 
        p.stroke(255);
        p.translate(200, height);
        p.branch(100);
    }
    
    p.branch = function(len){
        p.line(0, 0, 0, -len);
        p.translate(0, -len);
        if (len > 4) {
            p.push();
            p.rotate(angle);
            p.branch(len * .67);
            p.pop();
            p.push();
            p.rotate(-angle);
            p.branch(len*0.67);
            p.pop();

        }

    }

}