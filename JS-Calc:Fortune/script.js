
var numButton = document.getElementById("half-button");
numButton.addEventListener("click", halfNumber);

function halfNumber() {
  var num = document.getElementById("half-input").value;
  var halfNum;
  halfNum = num / 2;
  alert("The result is " + halfNum);
  console.log("Half of " + num + " is " + halfNum);
}


var fortuneButton = document.getElementById("fortune-button");
fortuneButton.addEventListener("click", fortune);

var outputFortune = document.getElementById("fortune-output");

function fortune() {
  var name = document.getElementById("fortune-input").value;
  var array1 = ["create your own happiness", "aim high, time flies", "just have fun"];
  var randomArrayNum = Math.floor(Math.random() * array1.length);

  outputFortune.innerHTML = "Dear " + name + ", your fortune for today is " + array1[randomArrayNum];
}


fortuneButton.addEventListener("click", restyle);

function restyle() {

  var randNum = Math.floor(Math.random() * 4);

  if (randNum == 0) {
    outputFortune.style.color = "#F0A034";
  }
  else if (randNum == 1) {
    outputFortune.style.textShadow = "0px 0px 50px #5FFF19";
  }
  else if (randNum == 2) {
    outputFortune.style.textDecoration = "underline";
  }
  else if (randNum = 3) {
    outputFortune.style.fontSize = "5rem";
  }

}
