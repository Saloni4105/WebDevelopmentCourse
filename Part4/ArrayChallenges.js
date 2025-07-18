/*1. Declare an array named 'teaflavours' that contain the strings "green tea", "black tea" and "oolang tea".
 Access the first element of the array and store it in a variable named firstTea. */

let teaflavours= ["Green tea", "Black tea", "Oolang tea"];
// let teaflavours= new Array("Green tea", "Black tea", "Oolang tea"); another way to declare an array

const firstTea = teaflavours[0];

/* Declare an array named 'cities' containing "London", "Tokyo", "New york" and "Paris" 
Access the third element in the array and store it in a varaible named 'favouriteCity' */

let cities= ["London", "Tokyo", "New York", "Paris"];
const favouriteCity = cities[2];

/* Decalre an array named 'teaType' containing "Herbal tea", "White tea", "masala chai"
Change the second element of the array to "jasmine tea" */

let teaType= ["Herbal Tea", "White Tea", "Masala Chai"];
teaType[1]= "Jasmine Tea";
// console.log(teaType);

/* Declare an array named 'citiesVisited containing "Mumbai" and "Sydney".
Adding "Berlin" to the array using  the "push" method */

let citiesVisited= ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

// citiesVisited[citiesVisited.length]= "Berlin" not recommended

/* You have an array named 'teaOrders' with "chai", "iced tea" , "matcha, "earl grey.
remove the last element of the array using pop method and store it in a variable named 'lastOrder" */

let teaOrders = ["Chai", "Iced tea", "Matcha", "Earl grey"];
const lastOrder = teaOrders.pop();

/*You have an array named 'PopularTeas' containing "green tea", "oolang tea" and "chai".
create an soft copy of the array named "softCopyTeas" */

let PopularTeas= ["green tea", "Oolang tea", "Chai"];
let softCopyTeas= PopularTeas;
console.log(softCopyTeas);
PopularTeas.pop();
console.log(PopularTeas); //deep copy
console.log(softCopyTeas); //actually pointing the reference

/* You have an array named 'topCities' containing "Berlin", "Singapore" and "New York".
Create an hard copy of this array and named 'hardCopyCities */

let topCities= ["Berlin", "Singapore", "New York"];
let hardCopyCities= [...topCities]; //way to hardcopy =shallow copy, pass by value
// let hardCopyCities= topCities.slice(); another way to hardcopy but not recommeneded
topCities.pop();
console.log(hardCopyCities);
console.log(topCities);

/* You have two arrays:
europeanCities: "Paris" and "Rome"
asianCities: "Tokyo" and "Bangkok"
Merge this two array in new array named worldcities */

let europeanCities= ["Paris","Rome"];
let asianCities= ["Tokyo", "Rome"];
let worldcities= europeanCities.concat(asianCities);
console.log(worldcities);

/* You have an array named 'teaMenu' containing "masala chai", "green tea", "Oolang tea" and "earl grey".
Find the length of the array and store it in a variable named 'menuLength'*/

let teaMenu= ["masala chai", "green tea", "Oolnag tea", "earl grey"];
const menuLength = teaMenu.length;
console.log(menuLength);

/* You have an array named 'cityBucketList' containing "kyoto", "london", "Cape town" and "Paris"
Check if london is in the array and store the result in the variable named 'isLondonInList' */

let cityBucketList= ["Kyoto", "London", "Cape town", "Paris"];
const isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
