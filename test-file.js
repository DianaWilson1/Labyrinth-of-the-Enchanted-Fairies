const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

/* parts of code just get learned 

let longString = `Hello, and welcome to the application!
Get started by logging in below!
We're happy to have you.`;

let greeting = `Hello, ${username}.`;
console.log(greeting);
Prints: Hello, friend.
const val = 2;

// If path
if (val === 1) {
  console.log('val is one');
// Else path
} else {
  console.log('val is not one');
  // Since val is not 1, the else path is taken, printing 'val is not one'.
}

const val = 3;

if (val === 1) {
  console.log('val is one');
} else if (val === 2) {
  console.log('val is two');
} else if (val === 3) {
  console.log('val is three');
} else {
  console.log('not one, two, or three');
}

// val is 3, so 'val is three' will be printed.

for (let number = 1; number < 10; number++) {
  console.log(number);
}
const dayOfTheWeek = 'Friday';
const isAfternoon = true;

if (dayOfTheWeek === 'Friday') {
  if (isAfternoon) {
    console.log('Almost the weekend!');
  } else {
    console.log('Happy Friday morning!');
  }
} else {
  console.log("It's not Friday.");
}
const seasonCheck = 'winter';

if (seasonCheck === 'summer') {
  console.log("It's summer!");
} else if (seasonCheck === 'fall') {
  console.log("It's fall now!");
} else if (seasonCheck === 'winter') {
  console.log('Brrr!');
} else if (seasonCheck === 'spring') {
  console.log("It's spring!");
} else {
  console.log('Invalid season');
}

const seasonCheck = 'winter';

switch (seasonCheck) {
  case 'summer':
    console.log("It's summer!");
    break;
  case 'fall':
    console.log("It's fall now!");
    break;
  case 'winter':
    console.log('Brrr!');
    break;
  case 'spring':
    console.log("It's spring!");
    break;
  default:
    console.log('Invalid season');
}

switch (seasonCheck) {
  case 'summer':
    console.log("It's summer!");
    break;
  case 'autumn':
  case 'fall':
    console.log("It's fall now!");
    break;
  case 'winter':
    console.log('Brrr!');
    break;
  case 'spring':
    console.log("It's spring!");
    break;
  default:
    console.log('Invalid season');
}
let number = 1;

while (number <= 10) {
  console.log(number);
}

let num = 120;

do {
  console.log(`${num} is even`);
  num += 2;
} while (num <= 10);








*/