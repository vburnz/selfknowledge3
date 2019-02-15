export default function sketch (p){ 
  //const mourns = props.mourns; 

  var imgDraw = false; 
  var width = 300; 
  var height = 300; 
  let mourn = false; 
  let mournscale = 0; 
  let clear = false; 
  

  p.setup = function(){ 
    p.createCanvas(width, height); 
    p.background(255, 214, 235); 
  }
  
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    console.log('props', props); 
      if (props.mourns > 0){
        mourn = true; 
      }
      //let mourns; 
      if (props.mourns >=5) { 
        mournscale = 200;
      } else if (props.mourns === 4){ 
        mournscale = 125; 
      }
      else if (props.mourns === 3){ 
        mournscale = 100; 
      }
      else if (props.mourns === 2){ 
        mournscale = 75; 
      }
      else if (props.mourns === 1){ 
        mournscale = 50; 
      }
      // switch(mourns){ 
      //   case 1: 
      //     mournscale = 50
      //   case 2: 
      //     mournscale = 75
      //   case 3: 
      //     mournscale = 100
      //   case 4: 
      //     mournscale = 200
      //   case 5: 
      //     mournscale = 0; 
      // }
    };
  p.draw = function (){  
    var img = p.createImage(width, height); 
    img.loadPixels();
    
  

    function writeColor(image, x, y, green, blue, alpha) { 
      var index = (x + y * width) * 4; 
      image.pixels[index] = red; 
      image.pixels[index + 1] = green; 
      image.pixels[index + 2] = blue; 
      image.pixels[index + 3] = alpha; 
    }

    function heating(image) { 
      var index = (x + y * width) * 4; //red index // + 1 for green + 1 for blue == but i think for now lets try just altering the red
      var index1 = (x-1 + y * width) * 4;
      var index2 = (x+1 + y * width) * 4;
      var index3 = (x + y-1 * width) * 4;
      var index4 = (x + y+1 * width) * 4;
      image.pixels[index] = (image.pixels[index1] + image.pixels[index2] + image.pixels[index3] + image.pixels[index4])/4
    }
    
    function cooling(image){ 
      var index = (x + y * width) * 4;
      image.pixels[index] -= 50; 
      image.pixels[index+1] -= 50; 
      image.pixels[index+2] -= 50; 
      image.pixels[index+3] -= 50; 
    }


    var x, y; 
    let num = img.width/2;  

    // if (!clear){ 
    //   for (y = img.height/2; y < img.height; y++){ 
    //     num-=1; 
    //     for (x = num; x<img.width-num; x++){ 
    //       // if (p.random() > 0.8){ 
    //         var red = 100;
    //         var green = 100; 
    //         var blue = 255; 
    //         var alpha = 255; 
    //         writeColor(img, x, y, red, green, blue, alpha)
    //       // }
    //     }
    //   }
    //   clear = true; 
    // }
    if (mourn){ 
      for (y = img.height/2; y < img.height; y++){ 
         
        if (y > img.height-mournscale){ 
          num-=0.5;
        
          for (x = num; x<img.width-num; x++){ 
            if (p.random() > 0.8){ 
              var red = p.random(255);  
              var green = 200; 
              var blue = 200; 
              var alpha = 255; 
              writeColor(img, x, y, red ,green, blue, alpha)
            }
          }
        } else { 
      // for (y = img.height/2; y < img.height; y++){ 
          num-=1; 
          for (x = num; x<img.width-num; x++){ 
            // if (p.random() > 0.8){ 
              var red = 100;
              var green = 100; 
              var blue = 255; 
              var alpha = 255; 
              writeColor(img, x, y, red, green, blue, alpha)
            // }
          }
      // }
        }
      }
    }

    
  
    for (y = img.height/2; y < img.height; y++){ 
      for (x = 0; x<img.width; x++){ 
        heating(img); 
        cooling(img); 
      }
    }
  


    img.updatePixels(); 
    p.image(img, 0, 0); 
  }

 
}