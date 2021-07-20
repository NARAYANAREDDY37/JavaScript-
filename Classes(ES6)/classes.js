class People {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		console.log(
			`Hello, this is ${this.name} and my age is ${this.age} and I'm from ${this.location}`
		);
	}
}

var person1 = new People('John', '24');
// console.log(person1);
// console.log(person1.__proto__ === Object.prototype);

// Class inheritence
class George extends People {
	constructor(location) {
		// accessing parent cosntructor using super
		super('George', 24);
		this.location = location;
	}
	// suppose I have greet method here also
	greet() {
		console.log('Just Hello');
	}

	// this.greet = greet method in this class i,e George

	/* greetTwice() {
		this.greet();
		this.greet();
	} */

	// if you super then parent greet mehtod will be executed
	greetTwice() {
		super.greet();
		super.greet();
	}
}

let george = new George('USA');
george.greetTwice();

// "static" keyword use
class Helper {
	static getMessage(message) {
		console.log(message);
	}
}

Helper.getMessage('Hey, How is it going??');

// getter & setters in classes
class Alien {
	constructor(name, bithPlace, age) {
		this._name = name;
		this._birthPlace = bithPlace;
		this.age = age;
	}

	getName() {
		return this._name.toUpperCase();
	}
	setName(value) {
		if (value > 2) {
			this._name = value;
		} else {
			console.log('Not saved');
		}
	}
}
let alien = new Alien('Pega', 'space', 100);
console.log(alien._name); // this is from constructor
console.log(alien.getName()); // this is form get name mehtod

alien.setName = 'Phonix';
console.log(alien.setName);
console.log(alien._name);

// extending Buitl-in objects to custom classes
class ExtendableArray extends Array {
	mutltiplyBy2() {
		let returnArray = [];
		this.forEach((value) => returnArray.push(value * 2));
		return returnArray;
	}
}

let newArray = new ExtendableArray();

newArray.push(1);
newArray.push(2);
newArray.push(3);

console.log(newArray.mutltiplyBy2());
