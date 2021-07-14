// For loop

/* for (let i = 1; i <= 9; i++) {
	console.log('loop', i);

	if (i === 3) break;
} */

// For loop in array
const names = ['Jonh', 'Alen', 'Rob', 'Martin'];

/* for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
} */

// using for of loop
/* for (const customer of names) {
	console.log(customer);
} */

// For loop in objects (objects are not iterable by default)
const user = {
	firstName: 'Narayana',
	lastName: 'Reddy',
	age: 24,
	address: {
		HouseNo: 8,
		street: 'franklin street'
	}
};

/* for(key in user) {
  console.log(user[key]);
} */

// While loop

/* let i = 0;
while (i < 10) {
	// console.log(i);
	i++;
	// if (i === 5) break;
	if (i === 5) continue;
	console.log(i); // 5 will be missiong
} */

// Do while

/* let i = 0;
do {
	i++;
	if (i === 5) continue;
	console.log(i);
} while (i < 0); // it prints one (even though 1 is not less than zero) */

// HOF --> forEach

animals = ['cat', 'dog', 'fox', 'elephant'];
animals.forEach((animal) => console.log(animal));
