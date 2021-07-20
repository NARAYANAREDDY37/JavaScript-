let symbol = Symbol('debug');
let anotherSymbol = Symbol('debug');
console.log(symbol);
console.log(symbol.toString());

// even though you have same name there are not equal
console.log(symbol === anotherSymbol);



