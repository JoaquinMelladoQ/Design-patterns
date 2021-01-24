class Suma {
    constructor( v = 0 ) {
        this.val = v
    }

    suma(v) {
        this.val += v;
        return this;
    }
}
// CHANGING THE ENCAPSULATED VALUE WITH A SERIES OF FUNCTIONS
// WITH 'THIS' YOU CAN ADD VALUES TO ORIGINAL VALUE 

const valor = new Suma(1)
console.log( valor
    .suma(1)
    .suma(2)
    .suma(3)
    .suma(4).val
)