

function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Nkh7e_Yeo/model.json", modelReady);
}



function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, result) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(result);

        document.getElementById("iCanHear").innerHTML= "I can hear " + result[0].label;

        img= document.getElementById("img");

        if(result[0].label== "Background Noise") {
            document.getElementById("iCanHear").innerHTML= "I can hear " + "buzzing";
            img.src= "bees.jpeg"
            document.getElementById("p").innerHTML= "Bees"
        }

        if(result[0].label== "neighing") {
            document.getElementById("iCanHear").innerHTML= "I can hear " + "neighing";
            img.src= "horse.jpg"
            document.getElementById("p").innerHTML= "Horse"
        }

        if(result[0].label== "mooing") {
            document.getElementById("iCanHear").innerHTML= "I can hear " + "mooing";
            img.src= "cow.jpg"
            document.getElementById("p").innerHTML= "Cow"
        }

        if(result[0].label== "roaring") {
            document.getElementById("iCanHear").innerHTML= "I can hear " + "roaring";
            img.src= "tiger.jpg"
            document.getElementById("p").innerHTML= "Tiger"
        }



    
    }
}