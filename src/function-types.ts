let greet = () => {
    console.log("Hello world!")
}

let greetType: Function

// greetType = 'hello'
greetType = () => {
    console.log('hello world')
}

const add = (a: number, b:number, c: number | string = 10):void => {
    console.log(a + b);
    console.log(c);
    
}
add(3, 9)


const minus = (a:number, b:number):number => {
    return a + b
}

let result = minus(9, 7)
// result = 'string'

const myTypes = {
    name: 'string',
    age: 99,
    // muFunc: (a:number, b: number, c: number = 21) => void,
    minus: (a:number, b:number): number => {
        return a + b
    }
}