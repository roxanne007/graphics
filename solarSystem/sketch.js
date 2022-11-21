var speed;

function setup() {
    createCanvas(900, 900);
}

function draw() {
    background(0);
    speed = frameCount;

    push();
    translate(width/2, height/2);

        push();
        rotate(radians(speed));
        translate(0,300);
        
            push();
            rotate(radians(-speed * 2));
            translate(0,100);
            rotate(radians(90));
            celestialObj(color(255,255,255), 30); // MOON 
            pop();

            push();
            rotate(radians(-speed * 4));
            translate(0,130);
            rotate(radians(-90));
            celestialObj(color(155,255,0), 20); // MOON 
            pop();

            
        rotate(radians(speed));
        celestialObj(color(0,0,255), 80); // EARTH

        pop();
    
    rotate(radians(speed/3))
    celestialObj(color(255,150,0), 200); // SUN
    
    pop();

    // text(radians(-speed*2), width / 2, height / 2);
}


function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}
