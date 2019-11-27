var video = document.querySelector("#videoElement");
var wrapper = document.querySelector("#mirror-wrapper");
var audio = new Audio('audio_file.mp3');

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      audio.play();
      audio.loop = true;
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
function full_screen()
{
  wrapper.requestFullscreen();
}
video.addEventListener('click', full_screen);