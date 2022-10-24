//any type

let age: any = 25;

age = true;

console.log(age)

age = 'string type'

console.log(age)

age = { name: 'luigi' }


let mixed: any[] = [];

mixed.push('name', true)

let ninja: { name: any, age: any }

ninja = { name: 421, age: 'my age'}

console.log(ninja)