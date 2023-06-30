// console logging and debugging

let name = "Ada";
let gender = "female";

console.log(name); // Output: "John"
console.log(gender); // Output: 30

// You can also print multiple values in a single console.log() statement
console.log("Name:", name, "gender:", gender);
// Output: "Name: Ada gender: female

//Displaying an error message
let age = 15;

if (age < 18) {
  console.warn("User is underage. Access may be restricted.");
}

// Simulating an error condition
if (age - 2) {
  console.error("Invalid age. Age cannot be negative.");
}
