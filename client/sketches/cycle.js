//okay so for this i want a class of arcs 

//and I'm going to want an iterator that establishes the arcs 

//you know what, i should have a cycle class that indirectly sets the arc class instances 
    //that way i can pass info into the cycle (like how long it is) that can be used within cycle
        //to dynamically set the size and number of the arcs 

//so referencing my notes on the tree classed p5 sketch 
//i could have a cycle.show() method
    //which calls arc.show() on each arc 
//so first i need to set up the arcs 
//and then i need to draw the arcs 
//lets try it!!!

export default function sketch (p){ 



    class Moons { 
        constructor(width, height){ 
            this.width = width; 
            this.height = height; 
        }
    
        setElements(){ 
    
        }
        show() { 
            p.stroke(0); 
            p.translate(this.width/2, this.height/2)
            for (var i = 0; i < 28; i++){ 
                p.push(); 
                p.rotate(p.TWO_PI * i / 28); 
                let color; 
                if (i < 14){ 
                    color = (1/14*255)*i;
                 }
                 else { 
                     color = (1/14*255)*(28-i);
                 } 
                p.fill(color); 
                p.ellipse(170, 15, 20, 20); 
                
                p.pop(); 
    
            }
        }
        clicked(x, y){ 
            this.clicked = function(x, y){
                var d = p.dist(this.pos.x, this.pos.y, x, y);
                if (d < this.r){
                    return true;
                }else{
                    return false;
                }
        
            }
        }
    }

    class Arc { 
        constructor(startAngle, endAngle, childNumber, totalChildrenNumber){ 
            this.start = startAngle; 
            this.end = endAngle; 
            this.num = childNumber; 
            this.siblings = totalChildrenNumber; 
            this.colorChunk ;  
        }
    
        showArcs(){ 
            if (this.num < this.siblings/2){ 
               this.colorChunk = (2/this.siblings*255)*this.num;
            }
            else { 
                this.colorChunk = (2/this.siblings*255)*(this.siblings - this.num);
            }
            p.strokeWeight(4)
            p.stroke(0); 
            p.fill(20+this.colorChunk)
    
            p.arc(200, 200, 300, 300, this.start, this.end)
    
        
    
        }
    
        showMoons(){ 
    
        }
    
    
    }

    class Cycle { 
        constructor(lengthOfCycle, numberElementsInCycle){ 
            this.length = lengthOfCycle; 
            this.numEl = numberElementsInCycle; 
            this.elements = []; 
        }
    
        setElements(){ 
            for (let i = 0; i < this.numEl; i++){ 
    
                let start = 6.24 / (this.numEl) * i 
                let end = 6.24 / (this.numEl) * (i + 1); 
                let arc = new Arc(start, end, i, this.numEl); 
                this.elements.push(arc); 
            }
        }
    
        show() { 
            for (let i = 0; i < this.numEl; i++){ 
                // console.log(this.elements[i])
                this.elements[i].showArcs(); 
            }
        }
    
    
    
    }

    var cycleLength = 28; 
    var cycleSegments = 28; 
    var canvasWidth = 400; 
    var canvasHeight = 400; 
    let cycle = new Cycle(cycleLength, cycleSegments); 
    let moons = new Moons(canvasWidth, canvasHeight); 
    let showed = false; 
    let cycleDay = 1;
    //the above can later be set by state or store or something 

    p.setup = function() { 
        p.createCanvas(canvasHeight, canvasWidth); 
    
        cycle.setElements(); 

        


    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
       cycleDay = props.day; 
       showed = false; 
      
    }

    p.draw = function() { 
        p.translate(canvasHeight, canvasWidth)
        p.rotate(p.PI); 
        if (!showed) { 
            p.background(255, 214, 235); 
            // rotate(PI); 
            cycle.show();
            moons.show(); 
            
            // p.rotate(p.TWOPI);
            
            p.stroke(0, 77, 61, 170)
            p.strokeWeight(14); 
            p.noFill(); 
            // p.rotate(p.PI)
            if (cycleDay >= 1) { 
                let dayAngle = p.map(cycleDay, 0, 28, 0, p.TWO_PI); 
                // p.arc(0, 0, 385, 385, -p.PI, -9*p.PI/8 + dayAngle);
                p.arc(0, 0, 385, 385, 0, dayAngle);
            }
            
            showed = true;
        }

         
        

        //ellipse(56, 46, 55, 55);
        
        

    }




    //okay so in another classed p5 sketch I have done
        //i had a setup func 
            //create canvas
            //tree = new Tree()
        //and i had a draw func 
            //set bkgrnd
            //tree.show()
            //tree.grow() 

            //show looks like where tree is drawn 
                //set stroke 
                //iterator to go through each LEAF and call this.leaves[i].show()
                    //leaf.show is just a functional class 
                        //that has a this.pos and this.reached 
                        //this.show(){ fill // no stroke// ellipse(pos.x, pos.y)}
                //iterator through each branch and call this.branches[i].show()
                    //each branch gets drawn from its parents pos.x to its own pos.x 

    //

    
    //so thinking about this.clicked 
    //in the mitosis simulation coding challenge -- if you click a cell it splits into two 
    //the cell class has a this.clicked function -- whcih takes (x, y)
    //oh shit they have vector math in here, which i relly dont need ----> but they look at this.pos.x vs passed in and compare if the distance is enouth and return true or false
    //in the main file they have function mousePressed --> which goes under draw and setup 
    //and on mouse pressed
        //loop through the cells 
        //and check and see if they are .clicked(mouseX, mouseY)
            //if they are -- make mitosis 

}







