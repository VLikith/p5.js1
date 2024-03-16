var one;
var webcam;
var color;
function preload(){}
function setup(){
    one=createCanvas(640, 480);
    one.position(110, 250);
    webcam=createCapture(VIDEO);
    webcam.hide();
    color="";
}
function draw(){
    image(webcam, 0, 0, 640, 480);
    tint(color);
}
function apply(){
    color=document.getElementById("input1").Value;
}
function take_snapshot(){
    save("image1.png");
}