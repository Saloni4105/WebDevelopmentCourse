const username= {
    "Student name": "Aryan", 
    firstname: "Saloni",
    isLoggedIn: true,
}; //ctrl d for change the word in all place like obj= username in all place of code


username.firstname= "Ms. Saloni";
username.lastname= "Gawande";

console.log(username["Student name"]);

console.log(username.firstname);

console.log(username);
console.log(typeof username);

let today= new Date();
console.log(today.getDate());
console.log(today.getFullYear());


// Array
let anotherUser= ["Aryan", "Saloni", "Gaurav", true];
console.log(anotherUser[1]);

let isValue= true;
console.log(isValue + 1);//implicit conversion
console.log(Number(isValue)); //Explicit conversion

let isNum= "2abc"
console.log(Number(isNum));
console.log(typeof Number(isNum));

console.log(Number(null));
console.log(typeof Number(null));
console.log(Number(undefined));
console.log(typeof Number(undefined));


