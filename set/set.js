/* 
The Set object lets you store unique values of any type, whether primitive values or object references.

set methods --> add, has, delete, clear

set has no keys --> it will treat values as keys
*/

let set = new Set([1, 2, 3, 4]);

set.add(5);
set.add(5);
set.add(5);

console.log(set);

// has method
console.log(set.has(4));

// delete method
// set.delete(2);
console.log(set);

// looping in set
for (let value of set) {
	console.log(value);
}

// keys
for (let value of set.keys()) {
	console.log(value);
}
console.log('------------------------------');

// values
for (let value of set.values()) {
	console.log(value);
}

// entries (keys & values both are same only)
for (let value of set.entries()) {
	console.log(value);
}

// clear method
// set.clear();
console.log(set);

// WeakSet(look oneNote)