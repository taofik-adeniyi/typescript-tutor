"use strict";
const me = {
    name: 'shawn',
    age: 30,
    speak(text) {
        console.log('hello');
    },
    spend(amount) {
        console.log('I spent: ' + amount);
        return amount;
    },
    talk(talk) {
        return talk;
    }
    // skills: []
};
console.log(me);
let someone;
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
// greetPerson({name: 'taofik'})
greetPerson(me);
