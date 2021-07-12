
// Few questions before starting
// 1
// function example1(){
//   var a=10;
// }
// console.log(a); // what is the output?
// Is it 10?



// 2
// function example2(){
//   var b=20;
//   function innerFunction(){
//     return b;
//   }
//   return innerFunction;
// }
// let output = example2();
// console.log(output); //what is the output?
// Is it 20?


// Function Expressions?
// let one = function(){
//   return 1;
// }
// What is function definition?
// console.log(one);
// What is function invoking or calling
// console.log(one());
// What will be the output, if we don't return anything from a function?
// console.log(one()); // undefined

// Nested Functions?
// function outer(){
//   console.log('Outer');
//   function inner(){
//     console.log('Inner');
//     return 1;
//   }
//   return inner;
// }
// // console.log(outer);
// let inner = outer();
// console.log(inner());


// Closures
/* var x=100;
function outer(){
  var y=50;
  var n=100;
  function inner(){
    var z=10;
    console.log(y+z+x);
    y++;
    z++;
  }
  return inner;
}
let inner = outer();
console.log(inner());
console.log(inner());
console.log(inner());
 */

function Bank(){
  var name ='Venkatesh';
  function getName(){
    return name;
  }
  function setName(newName){
    name = newName;
  }
  return {getName,setName}
}
let bank = Bank();
console.log(bank);
console.log(bank.getName());
bank.setName('Vivek');
console.log(bank.getName());
bank.setName('Chinni');
console.log(bank.getName());



