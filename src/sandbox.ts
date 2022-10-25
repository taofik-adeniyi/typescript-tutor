// let greetYou: Function;

// () => void


// () => number



// example one
let greetingsToo: (name: string, message: string) => void

greetingsToo = (name:string, message:string) => {
    console.log(`${name} say's ${message}`)
}

// example two
let calc: (a:number, b:number, c:string) => number 

calc = (numOne: number, numTwo: number, action: string):number => {
    if(action === 'add') {
        return numOne + numTwo
    }else {
        return numOne - numTwo
    }
}

// example three
type Person = {
    name: string;
    age: number
}
let blogDetails: (obj: {name: string, age: number}) => void
blogDetails = (ninja: Person) =>{
    console.log(`${ninja.name} is ${ninja.age} years old`);
}

