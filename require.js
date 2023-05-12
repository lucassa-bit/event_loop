// console.log(arguments);
// console.log(require('module').wrapper);


// module.exports
const Calculator = require('./modules/calculator')
const calc1 = new Calculator();
console.log(calc1.divide(2, 3));

// exports
const calc2 = require('./modules/calculator-exports');
console.log(calc2.divide(2, 3));
console.log(calc2);

const { divide } = require('./modules/calculator-exports');
console.log(divide(2, 3));

// imports
const calc2 = require('./modules/calculator-exports');
console.log(calc2.divide(2, 3));
console.log(calc2);

const { divide } = require('./modules/calculator-exports');
console.log(divide(2, 3));

// Caching
require('./modules/caching-test')();
require('./modules/caching-test')();
require('./modules/caching-test')();
