"use strict";
// explicit types
let character;
let age;
let isLoggedIn;
// age = 'strning'
age = 33;
// isLoggedIn = 345
isLoggedIn = true;
//arrays
let ninjas = [];
ninjas = ['yoshi', '23'];
ninjas.push('yoshi', 'mario');
// union types
let mixed = [];
// mixed.push(false)
mixed.push(1);
mixed.push('taofik');
console.log(mixed);
let uid;
uid = 'string parameter';
// uid = false
uid = 1234487;
// objects
let ninjaOne;
ninjaOne = {
    name: 'string',
    age: 30
};
let ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
