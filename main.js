img="";
objects=[];
status=false;

function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(480,450);
    canvas.position(450,100);
    video=createCapture(VIDEO);
    video.size(480,450);
    video.hide();
    
    cocoSSD=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:Detecting objects";
 }
function draw(){
  image(video,0,0,480,450);
    // fill("green");
    // text("Dog",45,75);
    // textSize(30);
    // noFill();
    // stroke("green");
    // rect(45,80,250,400);

    // fill("red");
    // text("Cat",250,75);
    // textSize(30);
    // noFill();
    // stroke("red");
    // rect(250,80,250,400);
  
if(status != false){
   
  
    for(i=0;i<objects.length;i++){
    fill("green");
    document.getElementById("number_of_objects").innerHTML="Number of objects detected:"+objects.length;
    percent = floor(objects[i].confidence * 100);

         text(objects[i].label + " " + percent + "%",objects[i].x-25,objects[i].y-10);
        textSize(30);
        noFill();
        stroke("green");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        document.getElementById("status").innerHTML="status:Objects detected";

    }
}

 
}
function modelloaded(){
    console.log("cocossd is loaded");
    status=true;
    cocoSSD.detect(video,gotresults);
  
}
function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
    objects=results;
  

}