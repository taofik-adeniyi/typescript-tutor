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
