//Work with booleans and logical operators

let isTrue = true;
let isFalse = false;

//logical operators (&&, ||, !) to combine and manipulate the boolean values.
//operator (&&)
let isWarm = false;
let hasSunscreen = true;

let goToBeach =  isWarm && hasSunscreen; 
console.log(goToBeach); //outpu= false

//logical operator (||)
let hasApple = false;
let hasOrange = true;

let hasFruit = hasApple || hasOrange; 
console.log(hasFruit); //outpu= true

//logical operator (!)
let isRaining = true;
let isNotRaining = !isRaining; 

console.log(isNotRaining); //outpu = false

// if statement
let isSunny = true;

if (isSunny) {
  console.log("It's a sunny day!");
} else {
  console.log("It's not sunny today.");
}                                       //output = it's a sunny day