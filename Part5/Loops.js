// loops:- for, while, do while, for/in, for/of, for each

/* Write a while loop that calculates the sum of all number from 1 to 5 and stores the result in the variable named sum */

let sum=0;
let i=1;

while(i<=5)
{
    sum = sum +i;
    i++;
}
console.log(sum);

// Write a while loop that counts down from 5 to 1 and stores the numbers in an array named countdown

let countdown=[];
let j=5;

while(j >= 1)
{
    countdown.push(j);
    j--;
}
console.log(countdown);

/*Write a do-while loop that prompts a user to enter their favourite teaa type until they "enter" stop.
Store each tea type in an array named teaCollection */

// let teaCollection= [];
// let tea;

// do {
//     tea= prompt(`Enter your favourite tea (type stop to finish)`); //run in browser because prompt doesn't support by vs code
    
//     if(tea != 'stop')
//     teaCollection.push(tea);

// } while (tea != "stop");


// Write a do while loop that adds numbers from 1 to 3 and stores the result in the variable named 'total'

let total= 0;
let k=1;

do {
    total += k;
    k++;    
} while (k <= 3);
console.log(total);


// Write a for loop that multiplies each element in the array [2,4,6] by 2 and stores the result in the new array named
// 'multipliedNumbers

let multipliedNumbers= [];
let numbers= [2, 4, 6];

for(let i=0; i<numbers.length; i++)
{
    // takeNum = numbers[i] * 2;   
    // multipliedNumbers.push(takeNum); 

    multipliedNumbers.push(numbers[i] * 2); //another way
}
console.log(multipliedNumbers);

/* Write a for loop that lists all the cities in the array ["Paris", "New york", "Tokyo", "London"] and store 
each city in a new array named 'citylist'*/

let citylist= [];
let cities= ["Paris", "New York", "Tokyo", "London"]

for (let i = 0; i < cities.length; i++) {
    citylist.push(cities[i]);
}
console.log(citylist);

