let gridElement = document.getElementById('grd'); //assign id grd to variable gridElement

let jsonDatabase = [ //json info (array) that will be filled on page by function
  {
    "name" : "Homer Jay Simpson",
    "occupation" : "Springfield Nuclear Power Plant Inspector",
    "loves" : ["TV", "donuts", "Duff"],
    "wants" : "to eat the world's LARGEST hoagie"
  },
  {
    "name" : "Majorie Bouvier Simpson",
    "occupation" : "homemaker",
    "loves" : ["Homie", "my kids", "making marshmellow squares"],
    "wants" : "to win the Ovenfresh Bake-Off"
  },
  {
    "name" : "Bartholomew JoJo Simpson",
    "occupation" : "student",
    "loves" : ["practical jokes", "revenge", "Krusty the clown"],
    "wants" : "to be EXPELLED from school FOREVER"
  },
  {
    "name" : "Lisa Marie Simpson",
    "occupation" : "student",
    "loves" : ["my saxophone", "the environment", "vegetarianism"],
    "wants" : "to own a pony"
  },
  {
    "name" : "Margaret Simpson",
    "occupation" : "baby",
    "loves" : ["my pacifier", "my PACIFIER", "MY PACIFIER"],
    "wants" : "MY PACIFIER"
  }
]

for (var i = 0; i < jsonDatabase.length; i++) { //go through json array of info
  createElement(jsonDatabase[i]); //perform this function
}

function createElement(incomingJSON) { //function definition

  let newGrdContent = document.createElement("DIV"); //create a div named grdContent
  newGrdContent.classList.add('grdContent');

  let newTitle = document.createElement("H2"); //create h2 tag named name
  newTitle.classList.add('name');
  newTitle.innerHTML = incomingJSON['name']; // fill with info from json array under name
  newGrdContent.appendChild(newTitle); //add this tag as child of grdContent

  let newOccup = document.createElement("H3"); //create h3 tag named occupation
  newOccup.classList.add('occupation');
  newOccup.innerHTML = "I am a " + incomingJSON['occupation']; //fill this sentence with info from json array under occupation
  newGrdContent.appendChild(newOccup); //add this h3 tag as child of grdContent

  let newLoves = document.createElement("H3"); //create h3 tag and complete sentence with info from json array under array named loves
  newLoves.innerHTML = "I love " + incomingJSON["loves"][0] + ", " + incomingJSON["loves"][1] + ", and " + incomingJSON["loves"][2];
  newGrdContent.appendChild(newLoves); //add this h3 tag sentence as child of grdContent

  let newDream = document.createElement("H3"); //create h3 tag named dream
  newDream.classList.add('dream');
  newDream.innerHTML = "I want " + incomingJSON['wants']; //complete this sentence with info from json array under wants
  newGrdContent.appendChild(newDream); //add this h3 tag sentence as child of grdContent


  gridElement.appendChild(newGrdContent); //add the grdContent div to the grd div as a child

}
