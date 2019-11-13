//gets id and assigns a variable
let penguinImg = document.getElementById('pgn');
let suitImg = document.getElementById('suit');
let hatImg = document.getElementById('hat');
let beardImg = document.getElementById('beard');

//sets positions to absolute to be able to move images and z-index to place on top of others
suitImg.style.position = 'absolute';
suitImg.style.zIndex = 1;

hatImg.style.position = 'absolute';
hatImg.style.zIndex = 1;

beardImg.style.position = 'absolute';
beardImg.style.zIndex = 2; //highest z index goes on top

//when penguin image is clicked, do function dressMe
penguinImg.addEventListener("click", dressMe);

//function definition
function dressMe() {
  var pgnLeft = penguinImg.offsetLeft; //gets left x value of penguin image
  var pgnTop = penguinImg.offsetTop; //gets top y value of penguin image

  //assigns new left x values and new top y values to each item image
  suitImg.style.left = pgnLeft + 3 + "px";
  suitImg.style.top = pgnTop + 5 + "px";

  hatImg.style.left = pgnLeft + 80 + "px";
  hatImg.style.top = pgnTop - 20 + "px";

  beardImg.style.left = pgnLeft + 90 + "px";
  beardImg.style.top = pgnTop + 80 + "px";

};
