/* Objects can be created in five ways
	1. object literals
	2. Object.create() with descriptors
	3. Function + new (constructor function)
	4. Factory function with closures
	5. JS class (ES6)
 */

// using object literals

/* var person = {
	name: 'narayana',
	age: 24,
	'home-address': {
		street: '1st-line',
		city: 'guntur',
		state: 'AP'
	},
	getProfile() {
		console.log(this.name + ' ' + 'is a frontend developer');
	}
};

person.getProfile(); */

// controlling the "property descriptor, Object.defineProperty(obj, prop, descriptor)"

/* Object.defineProperty(person, 'YearBorn', {
	writable: true,
	enumerable: true,
	configurable: true,
	value: 1996
});
console.log(person);
console.log(JSON.stringify(person)); */

// using Object constructor (new Object)

/* var employee = new Object();
employee.name = 'George';
employee.country = 'USA';
console.log(employee);
 */

// using object.create(null)

var person = {
	name: 'Narayana',
	age: 24
};

// creating our own prototypes in Global Object prototype
Object.prototype.hello = function () {
	console.log('Hello World');
};
console.log(person.__proto__);
console.log(person.toString());
person.hello();

var anotherPerson = Object.create(person);
anotherPerson.location = 'USA';
console.log(anotherPerson);

/* if you see here  hello method is not present in anotherPerson, then it will check the person prototype which is inherited. if it is not present there also, it will check global or parent Object.prototype*/

anotherPerson.hello();

/* Another example for Object.prototype */

/* let proto = {
	prop3: function () {
		console.log(this.prop1);
	}
};

let obj2 = Object.create(proto, {
	prop1: {
		writable: true,
		enumerable: true,
		configurable: true,
		value: 'Value 1'
	},
	prop2: {
		writable: true,
		enumerable: false,
		configurable: true,
		value: 'Value1'
	}
});

obj2.prop3(); */

// using Function + new (constructor function)

/* function Car(model, color) {
	this.model = model;
	this.color = color;
	Object.defineProperty(this, 'YearManf', {
		writable: true,
		enumerable: true,
		configurable: true,
		value: 1880
	});
}

var car1 = new Car('BMW', 'black');
var car2 = new Car('Audi', 'white');
console.log(car1.__proto__ == Object.__proto__);
console.log(car2);
 */

// using ES6 class

class Laptop {
	constructor(maker, price) {
		this.maker = maker;
		this.price = price;
	}

	getInfo() {
		var info = `${this.maker} laptop costs ${this.price} dollors`;
		return info;
	}
}

var laptop1 = new Laptop('Apple', 3000);
console.log(laptop1.getInfo());
