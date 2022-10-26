import { HasFormater } from '../interfaces/HasFormater'

export class Payment implements HasFormater {
    readonly recipient: string;
    details: string;
    private amount: number

    constructor(c:string,d:string,a:number){
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        // this.client = 'hello'
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}