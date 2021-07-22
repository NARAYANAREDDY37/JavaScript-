class Person {
	constructor(name) {
		this.name = name;
	}
}

function sample() {}

// Reflect.construct(target, arguments, custom prototype(optional))

let person = Reflect.construct(Person, ['George'], sample);
console.log(person);

console.log(person instanceof Person); // false
console.log(person.__proto__ === person.prototype); // false

// we have added the prototype sample
console.log(person instanceof sample); //true
console.log(person.__proto__ === sample.prototype); // true

// Reflect.apply method
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	hello(prefix) {
		console.log(`${prefix} ${this.name} is manufactured in ${this.year}`);
	}
}

let car = Reflect.construct(Car, ['BMW', 1990]);
console.log(car);
car.hello();

// if car2 wants to use hello method (we use different methods like, call, apply, bind)

// let car2 = new Car('Audi', 1800); you can do like this also
// car.hello.bind(car2)();

// Now everything with reflect
let car2 = Reflect.construct(Car, ['Audi', 1800]);

// you can do same with --> Reflect.apply(target, thisArgument, argumentsList)
Reflect.apply(car.hello, car2, ['This']);

// Reflect API prototypes
class Movie {
	constructor(name) {
		this.name = name;
	}
}
// adding prototype using .prototype method
Movie.prototype.actor = 'John';

let movie = Reflect.construct(Movie, ['Passion']);
console.log(Reflect.getPrototypeOf(movie));
console.log(Reflect.getPrototypeOf(movie) === Movie.prototype);

// using Reflect.setPrototypeOf(object you want to set prototype, actual prototype)

// creating prototype object

let proto = {
	actor: 'George'
};

// setting prototype to movie object
Reflect.setPrototypeOf(movie, proto);
console.log(Reflect.getPrototypeOf(movie) === Movie.prototype); //false
console.log(Reflect.getPrototypeOf(movie) === proto); // true

// Get & Set properties in object using Reflect
class Place {
	constructor(name, location) {
		this._name = name;
		this._location = location;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}
}

let user = {
	_name: 'Jim'
};

let place = Reflect.construct(Place, ['Times Square', 'NewYork']);
console.log(Reflect.get(place, 'name')); // Times Square
console.log(Reflect.get(place, 'name', user)); // Jim

//setting the name property
Reflect.set(place, 'name', 'John');
console.log(Reflect.get(place, 'name')); // John

Reflect.set(user, 'name', 'Peter'); // change form Jim to Peter
console.log(Reflect.get(user, 'name')); // Peter

// ownkeys
console.log(Reflect.ownKeys(place));

// create & delecte properties using Reflect (oneNote)
/* 

	1.Reflect.defineProperty
	2.Reflect.deleteProperty

*/

// preventExtensions & isExtensible properties in Reflect (oneNote)
/* 
	1. locking the object (preventExtensions)
	2. checking whethter the object is locked or not (isExtensible)
*/
