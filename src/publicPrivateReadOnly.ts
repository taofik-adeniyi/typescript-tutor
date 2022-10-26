
class Invoice {
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

const invOne = new Invoice('mario', 'worked on the mario website', 450);
const invTwo = new Invoice('luigi', 'worked on the luigi website', 1450);

// invOne.client = 'taofik'
// invOne.amount = '300'

console.log(invOne);
console.log(invTwo);

let invoices: Invoice[] = [];

invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices);


invoices.forEach(invoice => {
    // invoice.client = 'na me and you'
    console.log(`${invoice.client} ${invoice.details}`, invoice.format())
})