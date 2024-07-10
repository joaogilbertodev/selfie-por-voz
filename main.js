var SpeechRecognition = window.webkitSpeechRecognition;
var recognition1 = new SpeechRecognition();
function start(){
    document.getElementById("texBox").innerHTML=""
    recognition1.start()
}

recognition1.onresult=function(event){
    var Content=event.results[0][0].transcript
    document.getElementById("texBox").innerHTML=Content
    speak()
}

function speak(){
    var synth=window.speechSynthesis
    speakData=document.getElementById("texBox").value
    var utterthis=new SpeechSynthesisUtterance(speakData)
    synth.speak(utterthis)
    Webcam.attach(camera);
}
camera=document.getElementById("camera")
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});