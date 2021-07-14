// Nested if statements

// var spend = window.prompt('Enter the amount spend');

if (spend >= 20) {
	if (spend >= 50) {
		if (spend >= 100) {
			console.log('Wow! you are eligible for free shipping');
		} else {
			console.log('shipping charges will be 5 rupees');
		}
	} else {
		console.log('shipping charges will be 7 rupees');
	}
} else {
	console.log('shipping charges will be 10 rupees');
}
