
var numButton = document.getElementById("half-button");
numButton.addEventListener("click", halfNumber); //when this button is clicked, do this function

function halfNumber() {
  var num = document.getElementById("half-input").value; //gets input value and stores in variable
  var halfNum;
  halfNum = num / 2; //divides input by 2
  alert("The result is " + halfNum); //creates an alert
  console.log("Half of " + num + " is " + halfNum); //prints in console
}


var fortuneButton = document.getElementById("fortune-button");
fortuneButton.addEventListener("click", fortune); //when this button is clicked, do this function

var outputFortune = document.getElementById("fortune-output");

function fortune() {
  var name = document.getElementById("fortune-input").value; //gets value of input
  var array1 = ["create your own happiness", "aim high, time flies", "just have fun"]; //array of possible fortunes
  var randomArrayNum = Math.floor(Math.random() * array1.length); //random number generator

  outputFortune.innerHTML = "Dear " + name + ", your fortune for today is " + array1[randomArrayNum];
} //above line puts this line inside the outputFortune variable


fortuneButton.addEventListener("click", restyle); //when this button is pressed, apply restyle function

function restyle() {

  var randNum = Math.floor(Math.random() * 4); //random number from 0 to 3

  if (randNum == 0) {
    outputFortune.style.color = "#F0A034"; //do this if randNum is 0 (changes color to yellow)
  }
  else if (randNum == 1) {
    outputFortune.style.textShadow = "0px 0px 50px #5FFF19"; //(green text shadow)
  }
  else if (randNum == 2) {
    outputFortune.style.textDecoration = "underline"; //underlines
  }
  else if (randNum = 3) {
    outputFortune.style.fontSize = "5rem"; //changes font size
  }

}

var clrButton = document.getElementById("clr-button");
clrButton.addEventListener("click", clr); //when this button is pressed, do clr function

function clr() {
  document.getElementById("fortune-input").value = ''; //clears the name
  document.getElementById("fortune-output").innerHTML = ''; //clears the output fortune that is shown
  document.getElementById("fortune-output").removeAttribute("style"); //removes style of fortune output so that only one style is added per get fortune button click


}
