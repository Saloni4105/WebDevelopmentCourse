/* Write a for loops that loops through the array ["green tea", "black tea" ,"chai", "Oolang tea"] and stops the loop when 
it finds "chai". Store all teas before "chai" in a new array named 'selectedTeas' */

let teas= ["Green tea", "Black tea", "chai", "Oolang tea"];
let selectedTeas= [];

for(let i=0; i< teas.length; i++)
{
    if(teas[i] == "chai")
    {
        break;
    }
    selectedTeas.push(teas[i]);
}

console.log(selectedTeas);

/* Write a for loop  that loops through the array ["London" , "New york", "Paris", "Berlin"] and skips "Paris".
Store the other citites in new array named 'visitedCities' */

let cities= ["London", "New york", "Paris", "Berlin"];
let visitedCities= [];

for (let i = 0; i < cities.length; i++) {
    if(cities[i] == "Paris")
    {
        continue;
    }
    visitedCities.push(cities[i]);
}

console.log(visitedCities);

/*  Write a for-of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found
Store the numbers before 4 in an array named smallNumbers*/

let numbers= [1,2,3,4,5];
let smallNumbers= [];

for (const num of numbers) {
    if(num === 4)
    {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);


// use a for-of loop to iterate through the array ["Chai", "green tea", "herbal tea", "black tea"] and skips "herbal tea".
// store the other teas in an array named "preferredTeas".

let newTea= ["Chai", "green tea", "herbal tea", "black tea"];
let preferredTeas= [];

for(const tea of newTea)
{
    if( tea === "herbal tea")
    {
        continue;
    }
    preferredTeas.push(tea);
}
console.log(preferredTeas);

/* Use a for-in loop to loop through an object containing city populations.
Stop the loop when the population of "Berlin" is found and store all the previous city population in a new object named cityPopulations

let cityPopulations= {
    "London": 890000,
    "New York":840000,
    "Paris":220000,
    "Berlin":350000,
};
*/

let cityPopulation= {
    London: 890000,
    "New York":840000,
    Paris:220000,
    Berlin:350000,
};

let cityNewPopulations ={};

for (const city in cityPopulation) {
    if (city === "Berlin")
    {
        break;
    }
    cityNewPopulations[city]= cityPopulation[city];
}
console.log(cityNewPopulations);

/* Use a for-in loop to loop through an object containing city populations. Skip any city with a population below 3 million and
store the rest in a new object named 'largeCities'

let worldCities={
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000;
    "Paris": 2200000
}; */

let worldCities={
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000,
};
 let largeCities= {};
for (const citi in worldCities) {
    if(worldCities[citi] <= 3000000)
    {
        continue;
    }
        largeCities[citi]= worldCities[citi];
    }
    console.log(largeCities);
    
/* Write a forEach loop that iterates through the array ["earl grey", "greeen tea", "Oolang tea"].
Stop the loop when "chai" is found, and store all previous tea types in an array named 'availableTeas' */

let teaCollections= ["earl grey", "greeen tea","chai", "Oolang tea"];
let availableTeas= [];

teaCollections.forEach(function (teaa) {
    if(teaa === "chai")
    {
        return;
    }
    availableTeas.push(teaa);
});
console.log(availableTeas);


/* Write a forEach loop that iterated through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
Skip "Sydney" and store the other cities in a new array named "travledCities" */

let myWorldCities= ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledcities=[];

myWorldCities.forEach((citie) =>{
    if(citie === "Sydney")
    {
        return;
    }
    traveledcities.push(citie);
});
console.log(traveledcities);

/* Write a for loop that iterates through the array [2,5,7,9].
Skip the value '7' and multiply the rest by 2. Store the results in a new array named "DoubledNumbers" */

let nums= [2,5,7,9];
let DoubledNumbers =[];
for(let i=0; i<nums.length;i++)
{
    if(nums[i]== 7)
    {
        continue;
    }
    DoubledNumbers.push(nums[i] *2);
}
console.log(DoubledNumbers);


/* Use a for-of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
and stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named 'shortTeas'*/

let myTeas= ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas= [];

for (const newTeas of myTeas) {
    if(newTeas.length > 10)
    {
        break;
    }
    shortTeas.push(newTeas);
}
console.log(shortTeas);
