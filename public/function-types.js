"use strict";
let greet = () => {
    console.log("Hello world!");
};
let greetType;
// greetType = 'hello'
greetType = () => {
    console.log('hello world');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(3, 9);
const minus = (a, b) => {
    return a + b;
};
let result = minus(9, 7);
// result = 'string'
const myTypes = {
    name: 'string',
    age: 99,
    // muFunc: (a:number, b: number, c: number = 21) => void,
    minus: (a, b) => {
        return a + b;
    }
};
