export default function sketch (p){ 
    var n = 0;
    var c = 4;
    var height = 400; 
    var width = 400; 
    let end = 0; 
    
  
    p.setup = function (){
    
        p.createCanvas(height, width);
        p.angleMode(p.DEGREES);
        p.colorMode(p.HSB);
        p.background(329, 16.1, 100); 
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.feelings === 1){ 
          end = 100; 
      } else if (props.feelings === 2){ 
          end = 200; 
      } else if (props.feelings === 3){ 
        end = 400; 
      } else if (props.feelings === 4){ 
        end = 600; 
      }
      else if (props.feelings >= 5){ 
        end = 1300; 
      }
    
    }
    
    p.draw = function (){ 
        var a = n * 137.5;
        var r = c * p.sqrt(n);
    
        var x = r * p.cos(a) + width/2;
        var y = r * p.sin(a) + height/2;

        if (n < end) { 
            p.noStroke();
            p.fill(n%256, 255, 255);
            //can do a%, n%, (a-r)% to change color
            //can change size of circles -- larger to middle smaller ouside or soemthigng
            p.ellipse(x, y, 4, 4);
            n++;
        } else if (end !== 0) {
            // p.noLoop(); 
        }
    
        
    }
}





