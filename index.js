// $("#save_lincoln").click(() => saveLincoln(parseInt($("#interval").val())));
//
// function saveLincoln(interval) {
//   if (isNaN(interval)) {
//     interval = 10000;
//   }
//   $("#foreground").fadeOut(interval);
// }

function saveLincoln() {
  let interval = parseInt(document.querySelector("#interval").value);
  if (isNaN(interval)) {
    interval = 10000;
  }

  const zombieFace = document.querySelector("#foreground");
  fadeIn(zombieFace, interval);
}

const startButton = document.querySelector("#save_lincoln");

startButton.addEventListener("click", saveLincoln);

function fadeIn(element, interval) {
  var op = 1; // initial opacity
  var timer = setInterval(function() {
    if (op < 0) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    op -= 0.01;
  }, interval / 100);
}
