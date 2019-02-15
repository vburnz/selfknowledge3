export default function sketch (p) { 


    //var angle = 0;
    // var slider;
    var height = 400; 
    var width = 400; 
    let angle = p.TWO_PI;  
    let finalAngle = p.TWO_PI; 
    let finished = false; 

    p.setup = function() {
        p.createCanvas(height, width);
        // slider = createSlider(0, p.TWO_PI, p.PI/4, 0.01);
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        console.log('props', props); 
       
          if (props.intentions >=5) { 
            finalAngle = p.PI/4; 
          } else if (props.intentions === 4){ 
            finalAngle = p.PI/2
          }
          else if (props.intentions === 3){ 
            finalAngle = 5*p.PI/8 
          }
          else if (props.intentions === 2){ 
           finalAngle = 3*p.PI/4
          }
          else if (props.intentions === 1){ 
            finalAngle = 7*p.PI/8 
            
          }
        };

    p.draw = function() {
        if (finished) p.noLoop(); 
        
        p.background(255, 214, 235);
        p.stroke(0, 68, 61);
        p.translate(200, height);
        p.branch(100);
        if(angle > finalAngle){ 
            angle -=p.PI/16; 
        }
        else if (finalAngle != p.TWO_PI){
            finished = true; 
        }         
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