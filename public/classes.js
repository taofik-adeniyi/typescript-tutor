"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owe's $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'worked on the mario website', 450);
const invTwo = new Invoice('luigi', 'worked on the luigi website', 1450);
invOne.client = 'taofik';
// invOne.amount = '300'
console.log(invOne);
console.log(invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
