//creating and manipulating arrays


let numbers = [11, 12, 13, 14, 15];

numbers.push(16); // adds an element at the end
console.log(numbers); // Output: [11, 12, 13, 14, 15, 16]

numbers.pop(); // removes the last element
console.log(numbers); // Output: [11, 12, 13, 14, 15]
console.log(numbers.length); //output 5

let shiftArray = numbers.shift(); // removes the first element from an array and returns it.
console.log(numbers); //[ 12, 13, 14, 15]
console.log(shiftArray); // Output: 11

let unshiftArray = numbers.unshift(10);
console.log(numbers); //output [ 10, 12, 13, 14, 15]
console.log(unshiftArray); // Output: 5
