//conversion between data types

//parseInt
let numberString = "42.6";
let number = parseInt(numberString);
console.log(number); // Output: 42


//parseFloat
let floatString = "3.14";
let floatNumber = parseFloat(floatString);
console.log(floatNumber); // Output: 3.14


//tostring
let date = new Date();
let dateAsString = date.toString();

console.log(dateAsString); // Output: Thu Jun 29 2023 14:22:46 GMT+0100 (British Summer Time)

//split method
let fruitsString = "apple,banana,orange";
let fruitsArray = fruitsString.split(",");

console.log(fruitsArray); // Output: ["apple", "banana", "orange"]
