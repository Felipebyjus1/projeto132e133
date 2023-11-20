var objects = []
var modelStatus = false

function setup(){
    canvas = createCanvas(600, 600)
    canvas.parent("canvas")
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("resultStatus").innerHTML = " Detectando objetos"
}
function preload(){
    img = loadImage("pia-de-cozinha-em-marmore.jpg")
}
function modelLoaded(){
    console.log("Modelo carregado!")
    objectDetector.detect(img, gotResults)
}
function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        objects = results
        modelStatus = true
    }
}function draw(){
    image(img, 0, 0, 600, 600)
    if(modelStatus == true){
        //for(inicio; fim; incremento)
        for (i = 0; i < objects.length; i++){
            fill(255, 0, 0)
            console.log(i)
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y)
            textSize(30)
            noFill()
            stroke(255, 0, 0)
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}
