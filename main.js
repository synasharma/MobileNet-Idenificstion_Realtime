function preload()
{

}

function setup()
{
    canvas=createCanvas(500,400);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
    classifier=ml5.imageClassifier('MobileNet',modelLoaded);
}

function draw()
{
    image(webcam,0,0,500,400);
    classifier.classify(webcam,getResult);
}

function modelLoaded()
{
    console.log("ModelLoaded!");
}

function getResult(error,result)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(result);
        document.getElementById("name").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(2)*100+"%";
    }
    

}