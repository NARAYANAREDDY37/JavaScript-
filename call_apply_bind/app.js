function fn(message) {
	console.log(this);
	console.log(`${message} Narayana!!!`);
}
// fn(); // window object

var sky = {
	name: 'mary',
	fn: fn
};

var person = {
	name: 'John'
};

sky.fn(); // it will give sky object
sky.fn.bind(this)(); // it will give window object
sky.fn.bind(person)(); // this (from fn) = person object
sky.fn.call(person, 'Hello'); // no need to invoke
sky.fn.apply(person, ['Hello']); // no need to invoke but pass array
