var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
      console.log(video.srcObject)
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}