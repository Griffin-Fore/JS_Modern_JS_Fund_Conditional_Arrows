// Problem 1
// Write an arrow function that checks to see if a user is older than 18.
    // If they are older than 18, the output should be:
    // "You are good to go!"
    // If they are not older than 18, the output should be:
    // "Sorry! You must be 18 or older!"

const ageCheck = age => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!" 

console.log(ageCheck(19))
console.log(ageCheck(18))

// Problem 2
// Write an arrow function that checks to see if it is currently raining.
    // If it is raining, the output should be:
    // "Get your rain jacket!"
    // If it is not raining, the output should be:
    // "No rain on today's forecast!"

const rainCheck = rain => rain === true ? "Get your rain jacket!" : "No rain on today's forecast!"

console.log(rainCheck(true))
console.log(rainCheck(false))

// Problem 3
// Write an arrow function that checks to see if a number is even.
    // If it is even, the output should be:
    // "That's an even number!"
    // If it is not even, the output should be:
    // "That's an odd number!"

const evenNumberCheck = number => number % 2 == 0  ? "That's an even number!" : "That's an odd number!"

console.log(evenNumberCheck(2))
console.log(evenNumberCheck(3))

// Problem 4
// Write an arrow function that takes in two parameters and checks whether one number is greater than another.
    // If the number is greater, the output should be:
    // "<<NUMBER HERE>> is more than <<SECOND NUMBER HERE>>!"
    // If the number is less than the other number, the output should be:
    // "<<NUMBER HERE>> is less than <<SECOND NUMBER HERE>>!"

const numberGreatnessComparison = (number1,number2) => number1 > number2 
? `${number1} is more than ${number2}!`
: `${number1} is less than ${number2}!`

console.log(numberGreatnessComparison(4,2))
console.log(numberGreatnessComparison(2,3))

