var SpeechRecognition = window.webkitSpeechRecognition;
var recognition1 = new SpeechRecognition();
function start() {
    document.getElementById("texBox").innerHTML = ""
    recognition1.start()
}

recognition1.onresult = function (event) {
    var Content = event.results[0][0].transcript
    document.getElementById("texBox").innerHTML = Content
    if (Content == "tire minha selfie") {
        speak()
    }

}
var cont=0
function speak() {
    var synth = window.speechSynthesis
    //speakData=document.getElementById("texBox").value
    speakData = "tirando sua selfie em 5 segundos"
    var utterthis = new SpeechSynthesisUtterance(speakData)
    synth.speak(utterthis)
    Webcam.attach(camera);
    takeSnapShot()
    setTimeout(() => {
        takeSnapShot()
        //save()
    }, 9000);
    temp(cont)
}

//função para salvar
function save(){
    link=document.getElementById("link")
    img=document.getElementById("selfieImg")
    link.href=img
    link.click()
}
camera = document.getElementById("camera")
Webcam.set({
    width: 380,
    height: 260,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function takeSnapShot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("foto").innerHTML = '<img id="selfieImg" src="' + data_uri + '"/>'
    })
}

function temp(cont) {
    for (var i = 0; i < 5; i++) {
        cont = cont + 1
        var synth = window.speechSynthesis;
        speak_data = cont;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }
}
