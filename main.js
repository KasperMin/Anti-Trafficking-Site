
let imageSources = ["./assets/sad_girl.jpg", "./assets/fundraising_image.jpg" ];
let index = 0;

setInterval (function() {
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("slideImage").src = imageSources[index];
  index++;
}, 5000);
