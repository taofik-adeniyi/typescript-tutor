// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'strning'
age = 33

// isLoggedIn = 345
isLoggedIn = true


//arrays
let ninjas: string[] = [];

ninjas = ['yoshi', '23']
ninjas.push('yoshi', 'mario')

// union types
let mixed: (string|number)[] = [] 
// mixed.push(false)
mixed.push(1)
mixed.push('taofik')
console.log(mixed);

let uid: string | number;
uid = 'string parameter'
// uid = false
uid = 1234487

// objects

let ninjaOne: object;

ninjaOne = {
    name: 'string',
    age: 30
}

let ninjaTwo: {
    name: string;
    age: number;
    beltColor: string
}

ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' }

