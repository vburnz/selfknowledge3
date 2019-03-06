export default function sketch (p) { 
  console.log('reached sketch'); 
  let angle = 0; 
  let w = 24; 
  let magicAngle; 
  let maxD; 

  p.setup = function() {
    // put setup code here
    p.createCanvas(400, 400, p.WEBGL); 
    magicAngle = p.atan(p.cos(p.QUARTER_PI)); 
    //magicAngle = atan(1 / sqrt(2)); 
    maxD = p.dist(0, 0, 200, 200); 
  }

  p.draw = function () {
    // put drawing code here
    
    p.background(0, 0, 0); 

    p.ortho(-400, 400, 400, -400, 0, 1000); 

    

    //ambientLight(255, 255, 255, 0, -1, 0); 
    // directionalLight()
    //translate(0, 0, -100)
    
    p.rotateY(-magicAngle)
    p.rotateX(p.QUARTER_PI*1.3); 
    //rotateX(-PI/4)
    //rotateY()
    // translate(width/2, height/2); 

    // rectMode(CENTER); 

    //rotateX(angle*0.25)

    
    for (let z = 0; z < p.height; z+= w){ 
      for (let x = 0; x < p.width; x+=w){ 
        p.push(); 
        let d = p.dist(x, z, p.width/2, p.height/2)
        let offset = p.map(d, 0, maxD, -p.PI, p.PI)
        let a = angle + offset; 
        let h = p.floor(p.map(p.sin(a), -1, 1, 100, 300));   
        //ambientMaterial(255); 
        p.normalMaterial(); 
        p.translate(x-p.width/2, 0, z - p.height/2); 
        p.box(w-2, h, w-2); 
        //rect(x-width/2 + w/2, 0, w-2, h); 
        
        p.pop(); 
      }
    
    } 

    //one(40, 100, 100);
    angle -= 0.1; 

  }
}

// export default function sketch (p) {
//   let rotation = 0;

//   p.setup = function () {
//     p.createCanvas(600, 400, p.WEBGL);
//   };

//   p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
//     if (props.rotation){
//       rotation = props.rotation * Math.PI / 180;
//     }
//   };

//   p.draw = function () {
//     p.background(100);
//     p.noStroke();
//     p.push();
//     p.rotateY(rotation);
//     p.box(100);
//     p.pop();
//   };
// };