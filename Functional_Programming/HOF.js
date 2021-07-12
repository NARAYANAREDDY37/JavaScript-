/* 

In javascript or any functional programming language --> functions are values



*/

// functions are values (see example below)
var triple = function (x) {
	return x * 3;
};

var waffle = triple;

console.log(waffle(30));

// Higher order functions

// Filter (filter is a function on the array, that accepts another function as its argument, which it will use to return a new filter version of the array)

var animals = [
	{ name: 'Honey', species: 'dog' },
	{ name: 'bunny', species: 'fish' },
	{ name: 'jhony', species: 'dog' },
	{ name: 'kuria', species: 'monkey' },
	{ name: 'maria', species: 'cat' },
	{ name: 'sunny', species: 'dog' }
];

// Normal for loop
/* let dogs = [];
for (let i = 0; i < animals.length; i++) {
	if (animals[i].species === 'dog') {
		dogs.push(animals[i]);
	}
}
console.log(dogs);
 */

// using filter
/* var dogs = animals.filter((animal) => {
	return animal.species === 'dog';
});
console.log(dogs);
 */
// or (we can separate callback function)

/* var isDog = (animal) => {
	return animal.species === 'dog';
} */

/* var dogs = animals.filter(isDog);
console.log(dogs);
 */
// other animals
/* var otherAnimals = animals.reject(isDog)
console.log(otherAnimals); */

// Map
/* var animalNames = [];
for(var i=0; i<animals.length; i++){
  animalNames.push(animals[i].name)
};

console.log(animalNames);
 */

/* var animalNames = animals.map(animal => animal.name);

console.log(animalNames);
 */

// Reduce

var orders = [
	{ amount: 250 },
	{ amount: 650 },
	{ amount: 780 },
	{ amount: 150 },
	{ amount: 250 }
];

/* var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
	totalAmount += orders[i].amount;
}

console.log(totalAmount);
 */

// using Reduce
/* var totalAmount = orders.reduce((sum, order) => {
	console.log(sum, order);
	return sum + order.amount;
}, 0);

console.log(totalAmount);
 */

// recursion (the function that calls itself untill it doesn't)
// calling fn in its own body
/* let countDown = (num) => {
  if(num === 0) return;
  countDown(num - 1);
}

countDown(10); */

