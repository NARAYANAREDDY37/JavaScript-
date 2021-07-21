let numbers = [1, 2, 3];

// here we will get Array Iterator which is a part of Iterable protocol
console.log(numbers[Symbol.iterator]());

/* The iterable protocol allows JavaScript objects to define or customize their iteration behavior.

if you want to implement iterable protocol, if has only one method i,e next() --> use it 

*/
let iterfn = numbers[Symbol.iterator]();
console.log(iterfn.next()); // done: false, value: 1
console.log(iterfn.next()); // done: false, value: 2
console.log(iterfn.next()); // done: false, value: 3
console.log(iterfn.next()); // done: true, value: undefined

// writing our custom iterator logic for forloop with array

let numbers1 = [1, 2, 3];
numbers1[Symbol.iterator] = function () {
	let nextValue = 10;
	return {
		next: function () {
			nextValue++;
			return {
				done: nextValue > 15 ? true : false,
				value: nextValue
			};
		}
	};
};
for (let value of numbers1) {
	console.log(value);
}


// creating custom iterable object
let person = {
	name: 'George',
	hobbies: ['coding', 'sleeping'],
	[Symbol.iterator]: function () {
		let hobbies = this.hobbies;
		let i = 0;
		return {
			next: function () {
				let value = hobbies[i];
				i++;
				return {
					done: i > hobbies.length ? true : false,
					value: value
				};
			}
		};
	}
};

// Note: for of is working for objets, we have overrided the default behavior of for of loop
for (let hobby of person) {
	console.log(hobby);
}

// if you do for in, you will get only keys
for (let hobby in person) {
	console.log(hobby);
}
