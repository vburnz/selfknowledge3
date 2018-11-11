export default function sketch (p){ 

  var imgDraw = false; 
  var width = 300; 
  var height = 300; 

  p.setup = function(){ 
    p.createCanvas(width, height); 
    p.background(0)
  }
  
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
    
    // let num = img.width/2; //4

    let num = img.width/2;  

    //should make this one big 
    //with ifs inside the y --> directs to diff x loops 

    for (y = img.height/2; y < (4*img.height/5); y++){
      for (x = num; x<img.width-num; x++){ 
        if (p.random() > 0.8){ 
          var red = p.random(255)  
          var green = 200
          var blue = 200; 
          var alpha = 255; 
          writeColor(img, x, y, red, green, blue, alpha)
        }
      }
      num-=1.1; 
    }

    for (y = (3*img.height/4); y < img.height-10; y++){
      for (x = (num*1.2); x<img.width-(num*1.2); x++){ 
        if (p.random() > 0.8){ 
          var red = p.random(255)  
          var green = 200
          var blue = 200; 
          var alpha = 255; 
          writeColor(img, x, y, red, green, blue, alpha)
        }
      }

    }
    
    // for (y = img.height/2+35+5; y < img.height; y++){
    //   num+=1
    //   for (x = num; x<img.width-num; x++){ 
    //     if (p.random() > 0.8){ 
    //       var red = p.random(255)  
    //       var green = 200
    //       var blue = 200; 
    //       var alpha = 255; 
    //       writeColor(img, x, y, red, green, blue, alpha)
    //     }
    //   }

    // }

    for (y = img.height/2; y < img.height; y++){ 
      for (x = 0; x<img.width; x++){ 
        heating(img); 
        cooling(img); 
      }
    }

    //draw a red line
    y = 0; 
    for (x = 0; x < img.width; x++){ 
      writeColor(img, x, y, 255, 0, 0, 255)
    }

    //draw a green line 
    y = 0; 
    for (x = 0; x < img.width; x++) { 
      writeColor(img, x, y, 255, 0, 0, 255)
    }

    



    img.updatePixels(); 
    p.image(img, 0, 0); 
  }

 
}