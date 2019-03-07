export default function sketch (p) { 

    let height = 400; 
    let width = 400; 
    let angle = p.TWO_PI;  
    let finalAngle = p.TWO_PI; 
    let finished = false; 

    p.setup = function() {
        p.createCanvas(height, width);
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
          finished = false; 
          if (props.feelings >=5) { 
            finalAngle = p.PI/4; 
          } else if (props.feelings === 4){ 
            finalAngle = p.PI/2
          }
          else if (props.feelings === 3){ 
            finalAngle = 5*p.PI/8 
          }
          else if (props.feelings === 2){ 
           finalAngle = 3*p.PI/4
          }
          else if (props.feelings === 1){ 
            finalAngle = 7*p.PI/8 
            
          }
        };

    p.draw = function() {
        // if (finished) p.noLoop(); 
        
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