/* 
generators are syntactic sugar for iterators. They both do the same.

with generators we will have less code & easy understanding
*/

function* select() {
	yield 1;
	yield 2;
}

let it = select();
console.log(it.next()); // done: false, value: 1
console.log(it.next()); // done: false, value: 2
console.log(it.next()); // done: true, value: undefined

// another example that shows the power of generators
// this will give us an iterbale object
function* gen() {
	yield 'coding';
	yield 'sleeping';
}

// pointing our iterbale object to default iterator
let obj = {
	[Symbol.iterator]: gen
};

// using for of loop to iterate through an object.
for (let element of obj) {
	console.log(element);
}

// try, throw & return in iterators or generators

function* num(end) {
	for (let i = 0; i < end; i++) {
		try {
			yield i;
		} catch (error) {
			console.log(error);
		}
	}
}

let genObj = num(3);
/* console.log(genObj.next()); // done: false, value: 0
console.log(genObj.next()); // done: false, value: 1
console.log(genObj.next()); // done: false, value: 2
console.log(genObj.next()); // done: true, value: undefined
 */

// throw
/* console.log(genObj.next()); // done: false, value: 0
// error but executed! done: false, value: 1
console.log(genObj.throw('error occured')); 
console.log(genObj.next()); // done: false, value: 2
console.log(genObj.next()); // done: true, value: undefined
 */

// return
console.log(genObj.next()); // done: false, value: 0
console.log(genObj.return()); // done: true, value: undefined
console.log(genObj.next()); // done: true, value: undefined
console.log(genObj.next()); // done: true, value: undefined
