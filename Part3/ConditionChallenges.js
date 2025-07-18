//1. If a number is greater than another number

let num1=5;
let num2=9;

console.log("I am regular Upper code");
if(num1 > num2)
{
    console.log("num1 is greater than num2");
}
else
{
    console.log("Nope, num1 is not greater");
    
}
console.log("I am regular Upper code");

//2. Check if a string is equal to another String

let username= "chai";
let anotherUser= "Chai";

if(username == anotherUser)
{
    console.log("Pick another user");
}
else
{
    console.log("You can pick this username");
}

// 3. Checking if a variable is number or not

let score = 4;

if(typeof score === 'number')
{
    console.log("Yep, this is a number");
}
else
{
    console.log("no this is not a number");
}

// 4. check if a boolean value is true or false

let isTeaReady= true;

if(isTeaReady)
{
    console.log("Yes tea is ready");
}
else
{
    console.log("Tea is NOT ready");
    
}

// 5. Checking if a array is empty or not

let items=[1,2]

console.log(items.length);
if(items.length === 0)
{
    console.log("Array is empty");
}
else
{
    console.log("Array is not empty");
}
