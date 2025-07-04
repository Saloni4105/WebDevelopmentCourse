// var, let, const

// var= variable can be redeclared and updated, a global scope variable
var branch= "CSE";
var branch= "IT";
console.log(branch);

//let= variable cannot be redclared but can be updated, A block scope variable
let Dept= "Engg";
Dept= "Management";
console.log(Dept);

// const= variable cannot be redeclared or updated, A block scope variable
const score= 100;
// score=102; Error
console.log(score);

