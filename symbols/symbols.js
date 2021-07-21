let symbol = Symbol('debug');
let anotherSymbol = Symbol('debug');
console.log(symbol);
console.log(symbol.toString());

// even though you have same name there are not equal
console.log(symbol === anotherSymbol);

let obj = {
	name: 'Joe',
	[symbol]: 23
};

console.log(obj);
console.log(obj[symbol]);

// even you write for loop also, you cannot access symbol
for (key in obj) {
	console.log(key);
	console.log(obj[key]);
}

// shared Symbols

let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');

let person = {
	name: 'John',
	age: 27
};

function makeAge() {
	let symbol3 = Symbol.for('age');
	person[symbol3] = 39;
}
makeAge();

/* you can access only symbo1 & symbol2. But you can't access symbol3 cuz it is inside the function 

symbol1, symbol2 & symbol3 --> all are same (they are shared symbols)
*/
console.log(person[symbol1]);

// well known symbols in Javascript
class Car {}

Car.prototype[Symbol.toStringTag] = 'Car';

let car = new Car();
console.log(car.toString());


// Symbol static properties

/* if you want to change the default behaviour of anything i,e 
if you are using for loop in array or object and you want to change the default behaviour of for loop you can change it by Symbol.iterator

for more visit --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

To understand symbols static properties, Here we are changing the default behavior of primitve types (ex: numbers) */

let numbers = [1, 2, 3]
numbers[Symbol.toPrimitive] = function () {
  return 99;
}

// here we have changed the numbers array to return 99
console.log(numbers + 1); // 100