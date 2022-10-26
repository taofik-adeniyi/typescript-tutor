import { HasFormater } from '../interfaces/HasFormater'

export class Invoice implements HasFormater {
    readonly client: string;
    details: string;
    private amount: number

    constructor(c:string,d:string,a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // constructor(readonly client:string, details:string, private amount: string){}

    format():string {
        // this.client = 'hello'
        return `${this.client} owe's $${this.amount} for ${this.details}`
    }
}