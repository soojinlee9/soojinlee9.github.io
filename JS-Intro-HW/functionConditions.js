////04 functionConditions

function red(name){
  if (name === "fruit"){
    return "APPLE";
  }else if (name === "car"){
    return "FIRETRUCK";
  }else if (name === "store"){
    return "TARGET"
  }else {
    return "I CAN'T THINK OF THAT RED THING!"
  }
}

console.log(red("fruit"));
console.log(red("car"));
console.log(red("store"));
console.log(red("person"));
