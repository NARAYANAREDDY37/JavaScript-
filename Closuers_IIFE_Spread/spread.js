// Array spreading
const numbers =[1,2,3,4];
console.log(...numbers);

function sum(x,y,z,n){
  return x+y+z+n;
}
console.log(sum(...numbers));

// Merging two arrays
const arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[...arr1,...arr2];
// console.log(arr3);
// console.log(arr1);
let arr4 =[20,30,...arr1,10];
// console.log(arr4);

var name ='Venkatesh';
console.log(...name);

// Object spreading
let basicDetails={name:"Venkatesh",age:20}
let professionalDetails ={profession:'Fullstack'};
let result ={...basicDetails,...professionalDetails,...{location:'Andhra Pradesh'}};
console.log(result);

let numbersArray =[1,2,3];
function a(x,y,...rest){
  console.log(x,y,rest);
}
a(1,2,3,4);



















