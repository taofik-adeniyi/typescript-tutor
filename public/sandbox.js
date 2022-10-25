"use strict";
// let greetYou: Function;
// () => void
// () => number
// example one
let greetingsToo;
greetingsToo = (name, message) => {
    console.log(`${name} say's ${message}`);
};
// example two
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let blogDetails;
blogDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
