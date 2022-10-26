import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payment.js'
import { HasFormater } from './interfaces/HasFormater.js'


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

const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)


form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormater;

    if(type.value === 'invoice'){
        doc = new Invoice(...values)
        // doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }else {
        doc = new Payment(...values)
        // doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    // console.log(type.value, details.value, amount.valueAsNumber)
    console.log(doc)
    list.render(doc, type.value, 'end')
})


const invOne = new Invoice('mario', 'worked on the mario website', 450);
const invTwo = new Invoice('luigi', 'worked on the luigi website', 1450);

// invOne.client = 'taofik'
// invOne.amount = '300'

// console.log(invOne);
// console.log(invTwo);

// let invoices: Invoice[] = [];

// invoices.push(invOne)
// invoices.push(invTwo)


// console.log(invoices);


// invoices.forEach(invoice => {
//     // invoice.client = 'na me and you'
//     console.log(`${invoice.client} ${invoice.details}`, invoice.format())
// })


interface IsPerson {
    name: string;
    age: number;
    speak(a:string): void;
    spend(m:number): number,
    talk: (t: string) => string
}

const me: IsPerson = {
    name: 'shawn', 
    age: 30, 
    speak(text: string): void {
        console.log('hello');
    },
    spend(amount: number): number {
        console.log('I spent: ' + amount);
        
        return amount
    },
    talk (talk: string) {
        return talk
    }
    // skills: []
}

console.log(me);

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name)
}
// greetPerson({name: 'taofik'})

greetPerson(me)


// Genrics
const addUID = <T extends object | {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 1000)
    return { ...obj, uid }
}

let docOneTwo = addUID({name: 'taofik', age: 90})

// let docTwoOne = addUID('hello')

console.log(docOneTwo.uid)

// with interface
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T
}

const docThree: Resource<object> = {
    uid: 909,
    resourceName: 'taofik',
    data: { name: 'taofik' }
} 

const docFour: Resource<string[]> = {
    uid: 3,
    resourceName: 'taofik adeniyi',
    data: ['adeleke']
}

console.log(docThree);
console.log(docFour);

type YouTubeProps<T> = {
    name: T
}
const names: YouTubeProps<string> = {
    name: '909'
}


// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface ResourceOne<T> {
    uid: number;
    resourceName: ResourceType;
    data: T
}

const docFive: ResourceOne<object> = {
    uid: 909,
    resourceName: ResourceType.AUTHOR,
    data: { name: 'taofik' }
} 
console.log('docFive', docFive);


//tuples

let arr = ['ryu', 25, true]
arr[0] = false
arr[1] = 'yishi'
arr = [3, true, 'false']

let tup: [string, number, boolean] = ['dean', 55, false]
tup[0] = '99'
tup[1] = 1998


let student: [string, number];
student = ['taofik', 29]