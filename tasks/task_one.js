//Creating a var

let name = 'Clementina'
name = 'Tina'
console.log(name)

//concatenation

const surname = 'obi';
const middlename = 'Clementina';
const biodata = surname + ' '+ middlename
console.log(biodata) //output Obi Clementina

//String method toUpperCase

const message = 'lm tech hub';
const uppercaseMessage = message.toUpperCase()
console.log(uppercaseMessage); // LM TECH HUB

//String method toLowerCase

const chidi = 'MALE';
const lowerCaseChidi = chidi.toLowerCase()
console.log(lowerCaseChidi); //output male

//String method slice

const greet = 'Hello, World!';
const extracted = greet.slice(7,12);
console.log(extracted); //output world