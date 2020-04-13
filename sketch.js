var earth,mercury,venus,mars,jupiter,saturn,uranus,neptune;
var sun;

function setup(){
var canvas = createCanvas(1200,600);

earth = createSprite(396,309,50,50);
earth.addImage("earth.jpg",earth_Image);
earth.scale = 0.3;
mercury = createSprite(184,151,50,50);
mercury.addImage("mercury.jpg",mercury_Image);
mercury.scale = 0.175;
venus = createSprite(292,228,50,50);
venus.addImage("venus.jpg",venus_Image);
venus.scale = 0.175;
mars = createSprite(511,353,50,50);
mars.addImage("mars.jpg",mars_Image);
mars.scale = 0.3;
jupiter = createSprite(616,381,50,50);
jupiter.addImage("jupiter.jpg",jupiter_Image);
jupiter.scale = 0.5;
saturn = createSprite(723,422,50,50);
saturn.addImage("saturn.jpg",saturn_Image);
saturn.scale = 0.4;
uranus = createSprite(840,459,50,50);
uranus.addImage("uranus.jpg",uranus_Image);
uranus.scale = 0.35;
neptune = createSprite(992,534,50,50);
neptune.addImage("neptune.jpg",neptune_Image);
neptune.scale = 0.35;
sun = createSprite(0,0,50,50);
sun.addImage("sun.jpg",sun_Image);
sun.scale = 1.5;
sun.velocityY = 2;
sun.velocityX = 3;
}

function preload(){
    earth_Image = loadImage("earth.jpg");
    mercury_Image = loadImage("mercury.jpg");
    venus_Image = loadImage("venus.jpg");
    mars_Image = loadImage("mars.jpg");
    jupiter_Image = loadImage("jupiter.jpg");
    saturn_Image = loadImage("saturn.jpg");
    uranus_Image = loadImage("uranus.jpg");
    neptune_Image = loadImage("neptune.jpg");
    sun_Image = loadImage("sun.jpg");
}

function draw(){

    background("black");
    text(mouseX + ',' + mouseY, 10, 15);
    if(sun.isTouching(earth)){
        earth.destroy();
    }
    if(sun.isTouching(mercury)){
        mercury.destroy();
    }
    if(sun.isTouching(venus)){
        venus.destroy();
    }
    if(sun.isTouching(mars)){
        mars.destroy();
    }
    if(sun.isTouching(jupiter)){
        jupiter.destroy();
    }
    if(sun.isTouching(saturn)){
        saturn.destroy();
    }
    if(sun.isTouching(uranus)){
        uranus.destroy();
    }
    if(sun.isTouching(neptune)){
        neptune.destroy();
    }

    
    drawSprites();
    earth.display();
    mercury.display();
    venus.display();
    mars.display();
    jupiter.display();
    saturn.display();
    uranus.display();
    neptune.display();
    sun.display();
} 
    