/* DataTypes:-

Primitives- String, boolean, number, null, undefined, symbol
Non-Primitives- Objects (functions, Arrays, Objects)
*/

//Number
let balance= 120;
let anotherBalance= new Number(100);

// console.log(balance);
// console.log(anotherBalance);
console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

// Boolean
let isActive= true;
let isReallyActive= new Boolean(false);

console.log(typeof isActive);
console.log(typeof isReallyActive);

// null & undefined
let firstname= null;
let lastname;

console.log(firstname);
console.log(lastname);

// String
let myString= 'Hello';
let user= 'Hitesh';

let oldGreet= myString + " " + "Hitesh";
console.log(oldGreet);

let greet= `Hello ${user} !`;
console.log(greet);

let demo= `value is ${2 * 2}`;
console.log(demo);

// Symbol= generated unique value, return always symbol, every time generate new symbol
let sm1= Symbol();
let sm2= Symbol();
console.log(sm1);

console.log(sm1 == sm2);

let sm3= Symbol("hitesh");
let sm4= Symbol("hitesh");
console.log(sm3);

console.log(sm3 == sm4);

