document.addEventListener('DOMContentLoaded', function(event) {

  var rellax = new Rellax('.rellax');

});

let res = document.getElementById('answer');

var randNum = Math.ceil(Math.random() * 5); //random number generator

res.innerHTML = "Is your number " + randNum + "?";


let corButton = document.getElementById('correct');
let wroButton = document.getElementById('wrong');

corButton.addEventListener("click", ggif); //if thumb up button pressed, fo ggif
wroButton.addEventListener("click", bgif); //if thumb up button pressed, fo bgif

function ggif() { //displays this gif
  let gif = document.getElementById('gif');
  let newImage = document.createElement("IMG");
  newImage.src = "https://media.giphy.com/media/sQCwnA888oJY4/giphy.gif";
  gif.appendChild(newImage);
}

function bgif() { //displays this gif
  let gif = document.getElementById('gif');
  let newImage = document.createElement("IMG");
  newImage.src = "https://media.giphy.com/media/kh0G9vPvW6nsc/giphy.gif";
  gif.appendChild(newImage);
}
