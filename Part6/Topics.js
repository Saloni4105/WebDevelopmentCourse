// 1. Function: A function is a reusable block of code that performs a specific task
// You define it once and use it many times.
 function greet(name)
 {
    return "Hello, "+ name;
 }
 console.log(greet("Saloni"));

//  2. Arrow function:- An arrow function is a shorter way to write a function. 
// It's introduced in ES6 and doesn't bind its own this.
// Shorter syntax and cleaner code, especially useful in callbacks.

const greeting = (name) =>{
    return `Hello, ${name}`;
}

console.log(greeting("Saloni"));


// 3. this and context: the this keyword refers to the object from which the function is called.
// In regular function, this refers to the obj that calls the function
// In arrow fucntion, this is taken from the surrounding(lexical) context.this behave differntly in arrow function

const obj= {
    name: "Saloni",
    greet: function()
    {
        console.log(this.name);//this refers to the obj
    },
};
obj.greet();
console.log(typeof obj.name);


const arrowObj= {
    name: "Saloni",
    greet: () =>
    {
        console.log(this.name); //this here does not refer to arrowObj
    },
};
arrowObj.greet();

// 4. Higher Order Function:- A higher- Order function is a function that takes another function as an argument or return a fucntion
// map(), filter(), reduce() are all higher-order funcition
function sayHello()
{
    return "Hello";
}
function greetUser(callback)
{
    console.log(callback());
}
greetUser(sayHello);

// 5. Nested function: Is a fucntion defined inside another function
// Useful for breaking tasks into smaller parts or for closures

function Outer()
{
    console.log("I am Outer Fucntion");
    
    function Inner()
    {
        console.log("I am Inner function");
    }

    Inner();
}
Outer();