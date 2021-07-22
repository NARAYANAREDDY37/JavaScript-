/* 
Proxy is like a middle layer or wrapper for the object

The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

Proxy has two parameters --> proxy(target, handler)

In proxy handlers are called --> Traps
*/

let person = {
	name: 'Geroge',
	age: 24
};

let handler = {
	get: (obj, key) => {
		return key in obj ? obj[key] : 'Not found';
	}
};

/* let proxy = new Proxy(person, handler);
console.log(proxy.name); */

// Getting & setting the properties using Proxy and Reflect

// you can use any object (normal object, es6 class object etc.)
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}

let handler1 = {
	get: (obj, key) => {
		return key in obj ? obj[key] : 'Not found';
	},

	set: (obj, key, value) => {
		if (value.length > 3) {
			Reflect.set(obj, key, value);
		}
	}
};

let car = new Car('BMW', '1890');

let proxy1 = new Proxy(car, handler1);
console.log(proxy1.name);

proxy1.name = 'Audi';
console.log(proxy1.name);

// setting the proxy for functons
function log(message) {
	console.log(`The message is - ${message}`);
}

let handler2 = {
	apply: function (fnName, thisars, argslist) {
		// console.log(fnName);
		// console.log(thisars);
		// console.log(argslist);
		if (argslist.length === 1) {
			Reflect.apply(fnName, thisars, argslist);
		}
	}
};

let proxy2 = new Proxy(log, handler2);
proxy2('Hai, Hello!');

// revoking the proxy
let flower = {
	name: 'Jasmin'
};

handler3 = {
	get: (obj, key) => {
		return Reflect.get(obj, key);
	}
};

/* let proxy3 = new Proxy(flower, handler3);
console.log(proxy3.name);
 */

/* let proxy = Proxy.revocable(flower, handler3);
console.log(proxy);
 */

let { proxy, revoke } = Proxy.revocable(flower, handler3);

revoke();

// console.log(proxy.name); //error since revoked the proxy

console.log(flower.name); // Jasmin (you can also access through object)
