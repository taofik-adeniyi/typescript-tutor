import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormater;
// docOne = new Invoice('leke', 'app works', 900)
// let docTwo: HasFormater;
// docTwo = new Payment('bidemi', 'app works', 302)
// let docs: HasFormater[] = [];
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)
// const anchor: HTMLAnchorElement = document.querySelector('a')!
// // if(anchor){
// //     console.log(anchor.href)
// // }
// console.log(anchor.href)
// const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form');
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
        // doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }
    else {
        doc = new Payment(...values);
        // doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    // console.log(type.value, details.value, amount.valueAsNumber)
    console.log(doc);
    list.render(doc, type.value, 'end');
});
const invOne = new Invoice('mario', 'worked on the mario website', 450);
const invTwo = new Invoice('luigi', 'worked on the luigi website', 1450);
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
// Genrics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOneTwo = addUID({ name: 'taofik', age: 90 });
// let docTwoOne = addUID('hello')
console.log(docOneTwo.uid);
const docThree = {
    uid: 909,
    resourceName: 'taofik',
    data: { name: 'taofik' }
};
const docFour = {
    uid: 3,
    resourceName: 'taofik adeniyi',
    data: ['adeleke']
};
console.log(docThree);
console.log(docFour);
const names = {
    name: '909'
};
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 909,
    resourceName: ResourceType.AUTHOR,
    data: { name: 'taofik' }
};
console.log('docFive', docFive);
//tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yishi';
arr = [3, true, 'false'];
let tup = ['dean', 55, false];
tup[0] = '99';
tup[1] = 1998;
let student;
student = ['taofik', 29];
