export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // constructor(readonly client:string, details:string, private amount: string){}
    format() {
        // this.client = 'hello'
        return `${this.client} owe's $${this.amount} for ${this.details}`;
    }
}
