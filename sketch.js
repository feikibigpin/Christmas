var myBg, mic, volume;

function preload() {
  myBg = loadImage('Imagen/1.png');
}

var snowflakes = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //With microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  volume = mic.getLevel();
  volume = map(volume,0,1,0,2)
  push();

  translate(0,0);
  background('#c4e6ff');
  text(volume,5,height-5);  
  

  //move the center respect to the head
  push();
  translate(width/2,height/2-100);
  imageMode(CENTER)
  image(myBg,0,100,1011,720);
  //NOSE
  // transformations just for the nose
  //push();
  //var noseRotation = map(volume,0,1,PI/2.5,PI/5);
  //rotate(noseRotation);
  
  //var noseWidth = 20;
  //var noseLength = 35;
  //var noseX = 0;
  //var noseY = -40;
  
  //noFill();
  //fill('#fea57b');
  //noStroke();
  //triangle(noseX-(noseWidth/2),noseY, noseX+(noseWidth/2),noseY, noseX,noseY-noseLength)
  pop();
  
  //EYE
  //var eyeX = 18;
  //var eyeY = -13;
  //var eyeSize = 12;
  //fill(0);
  //noStroke();
  //ellipse(eyeX,eyeY,eyeSize);
  //eyelid
  //var eyelidShift = map(volume,0,1,14,1.5);
  //fill(255);
  //ellipse(eyeX-eyelidShift,eyeY-eyelidShift,eyeSize);

  //MOUTH NIÑA
  push();
  fill(0);
  noStroke();
  translate(320,375);
  var mouthX = 0;
  var mouthY = 0;
  var mouthSize = map(volume,0,1,4,40);
  ellipse(mouthX, mouthY, mouthSize, mouthSize);
  pop();

  
  //MOUTH NIÑO
  fill(0);
  noStroke();
  translate(430,300);
  var mouthX = 0;
  var mouthY = 0;
  var mouthSize = map(volume,0,1,4,30);
  ellipse(mouthX, mouthY, mouthSize, mouthSize);
  pop();
  
    //venas
 push();
 //fill(255,0,0);
  //noStroke();
  stroke(color('#da9a9a'));
    translate(885,295);
  var mouthX = -10;
  var mouthY = -10;
  var mouthSize = map(volume,0,1,4,30);
  strokeWeight(mouthSize);
  line(mouthX, mouthY, 5, 5);
  pop();
  pop();
    
push();
 //fill(255,0,0);
  //noStroke();
  stroke(color('#da9a9a'));
    translate(880,300);
  var mouthX = -10;
  var mouthY = 0;
  var mouthSize = map(volume,0,1,4,30);
  strokeWeight(mouthSize);
  line(mouthX, mouthY, 15, -15);
  pop();
  pop();
    //------------------------
    push();
 //fill(255,0,0);
  //noStroke();
  stroke(color('#da9a9a'));
    translate(965,325);
  var mouthX = -10;
  var mouthY = -10;
  var mouthSize = map(volume,0,1,4,30);
  strokeWeight(mouthSize);
  line(mouthX, mouthY, 0, 5);
  pop();
  pop();
    
push();
 //fill(255,0,0);
  //noStroke();
  stroke(color('#da9a9a'));
    translate(960,330);
  var mouthX = -10;
  var mouthY = 0;
  var mouthSize = map(volume,0,1,4,30);
  strokeWeight(mouthSize);
  line(mouthX, mouthY, 5, -10);
  pop();
  pop();
    
 //----------------------------------------------------------------------
  //SNOWFLAKES
    
  if(true){
    var amount= map(volume,0,1,0,5);
    for(i=1; i <= amount; i++) {
      var obj = {
        x: random(0,1),
        y: random(0,-height/10),
        size: random(1, amount+2)
      }
      translate(0,0);
      //add snowflake to the array of snowflakes
      snowflakes.push(obj);
    }
  }
  
  
  for(var i=0; i< snowflakes.length; i++) {
    var fallingSpeed = 1;
    
    // Increase the single snowflake vertical position
    snowflakes[i].y += fallingSpeed + snowflakes[i].y*0.006; // the last piece needs to simulate gravity
    
    // Create a new ellipse using the x and y properties of the snowflake object
    fill(235,235,188)
    noStroke();
    fill(255);
    ellipse(snowflakes[i].x*width, snowflakes[i].y, snowflakes[i].size);
  }
  
  // Ideally at the end of the sketch:
  // remove elements from array when they go out of the window
  // (not a minimum requirement, just useful for better performances)
  for (var i=snowflakes.length-1; i>= 0; i--){
    if (snowflakes[i].y > height){
      snowflakes.splice(i,1);
    }
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}