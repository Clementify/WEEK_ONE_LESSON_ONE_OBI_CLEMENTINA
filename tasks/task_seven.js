// The typeof operator is useful for basic type checking and can be used to perform different actions based on the data type of a value or expression.

console.log(typeof 42); // Output: "number"
console.log(typeof "Hello"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (typeof null is a known historical quirk in JavaScript)
console.log(typeof [1, 2, 3]); // Output: "object"
console.log(typeof { name: "John", age: 30 }); // Output: "object"
console.log(typeof function() {}); // Output: "function"


// Equality Operator (==):
// The equality operator compares two values for equality, allowing for type coercion. It converts the operands to a common type before making the comparison. Here are a few examples:

console.log(5 == "5"); // Output: true (values are equal after type coercion)
console.log(true == 1); // Output: true (values are equal after type coercion)
console.log(null == undefined); // Output: true (values are equal)


// Strict Equality Operator (===):
// The strict equality operator compares two values for equality without performing any type coercion. It checks for both value and type equality. Here are a few examples:

console.log(5 === "5"); // Output: false (values are not of the same type)
console.log(true === 1); // Output: false (values are of different types)
console.log(null === undefined); // Output: false (values are of different types)



// In JavaScript, truthy and falsy values are related to the concept of boolean evaluation. Every value in JavaScript has an inherent truthiness or falsiness. Understanding truthy and falsy values is important for conditional statements and logical operations. Here's the difference between them:

// Truthy Values:
// In JavaScript, a value is considered truthy if it evaluates to true when treated as a boolean. The following values are considered truthy:

// true: The boolean value true is always truthy.
// Non-zero numbers: Any non-zero number, positive or negative, is truthy.
// Non-empty strings: Any string with at least one character is truthy.
// Objects: Any object, including arrays and functions, is truthy.
// Arrays: Even if an array is empty, it is still considered truthy.
// Falsy Values:
// On the other hand, a value is considered falsy if it evaluates to false when treated as a boolean. The following values are considered falsy:

// false: The boolean value false is always falsy.
// 0: The number zero (0) is falsy.
// NaN: The special value NaN (Not-a-Number) is falsy.
// "": An empty string ("") is falsy.
// null: The value null is falsy.
// undefined: The value undefined is falsy.
// When using these values in conditional statements or logical operations, they can be implicitly converted to boolean values.