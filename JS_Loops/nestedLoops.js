// understanding the nested for loops

/* for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		console.log(i, j);
	}
} */

/* for (let i = 0; i < 10; i++) {
	for (let j = i; j < 10; j++) {
		console.log(i, j);
	}
}
 */

let d = document.getElementById('destination');

/* for (let i = 0; i < 10; i++) {
	for (let k = i; k >= 0; k--) {
		d.innerHTML += k;
	}
	d.innerHTML += '<br /> ';
} */

// Another Way

/* for (let i = 0; i < 10; i++) {
	for (let k = i; k >=0; k--) {
		d.append(k + '');
	}
  var br = document.createElement('br');
  d.appendChild(br);
} */

// intersting example

/* for (let i = 0; i <= 9; i++) {
	for (let k = i; k >= 0; k--) {
		d.innerHTML += i;
	}
	d.innerHTML += '<br /> ';
} */

/* var symbol = window.prompt('Enter a symbol to use');
var rows = window.prompt('Enter # of rows');
var columns = window.prompt('Enter # of columns');
 */
/* for (let i = 0; i < rows; i++) {
	// console.log(i);
	// console.log(rows);

	for (let j = 0; j < columns; j++) {
		// console.log(j);
		// console.log(columns);
		// console.log(symbol);
		document.getElementById('myRectangle').innerHTML += symbol;
	}
	document.getElementById('myRectangle').innerHTML += '<br>';
} */

// Nested loops with Arrays & Objects

let twoD = [
	[1, 2, 3, 4, 5, 6, 7],
	[8, 10, 5, 7, 3, 22, 6, 42],
	[123, 54, 12, 11, 9, 15]
];

let bigHero = {
	characters: [
		{ name: 'Hiro', voice: 'Ryan Potter' },
		{ name: 'Baymax', voice: 'Scott Adsit', prop: 12 },
		{ name: 'Go Go Tamago', voice: 'Jamie Chung' },
		{ name: 'Fred', voice: 'T.J. Miller' }
	]
};

// nested loop in 2D Arrays

/* let rows = twoD.length;
for (let i = 0; i < rows; i++) {
	let items = twoD[i].length;
	// console.log(i, items);
	for (let j = 0; j < items; j++) {
		console.log(twoD[i][j]);
	}
} */

// Nested loop in Objects

let chars = bigHero.characters; // (or) bigHero['characters]

for (let i = 0; i < chars.length; i++) {
  // console.log(chars[i].name);
  // console.log(chars[i].voice);
  let objects = chars[i];
  for(let key in objects){
    console.log(key, objects[key]);
  }
	
}

