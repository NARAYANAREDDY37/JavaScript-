/* 
The Map object holds key-value pairs and remembers the original insertion order of the keys. 

Any value (both objects and primitive values) may be used as either a key or a value.

*/

let fruits = {
	name: 'Apples'
};

let vegetables = {
	name: 'Potatoes'
};

// creating a Map
let basket = new Map();

// setting items to Map
basket.set('fruits', fruits);
basket.set('veggies', vegetables);

console.log(basket);
console.log(basket.size);

// getting items from the Map
console.log(basket.get('fruits'));

// clearing the Map
// basket.clear();

// looping over Map objects

// getting keys (it has MapIterator, so we can use for of loop)
console.log(basket.keys());

// using for of loop
for (let items of basket.keys()) {
	console.log(items);
}
for (let items of basket.values()) {
	console.log(items);
}

// either you use basket or basket.entries() both are same (they will give keys & values)
for (let entry of basket.entries()) {
	console.log(entry);
}
for (let items of basket) {
	console.log(items);
}

// WeakMap (look in one note)

