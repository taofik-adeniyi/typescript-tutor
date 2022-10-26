export class Payment {
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        // this.client = 'hello'
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
