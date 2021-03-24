console.log("Hello World!");
//===//
//Create a Calculator Node.js Module with functions add,
//subtract and multiply.
//And use the Calculator module in another Node.js file:
const calculator = require('./app-2-calculator.js');
const x = 3;
const y = 5;
console.log('add: ' + calculator.add(x, y));
console.log('divide: ' + calculator.divide(x, y));