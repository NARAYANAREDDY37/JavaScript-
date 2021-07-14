const myArr = [1, 2, 3, 1, 5, 2, 7, 8];

const mySet = new Set(myArr);

// again converting set to array
const uniqueArray = [...mySet];
console.log(uniqueArray);

// set methods

// creating set
const set = new Set([3, 4, '9', 'george', 4, 5, 3]);

// add method
set.add(9);
set.add({ age: 24 });

console.log(set);
