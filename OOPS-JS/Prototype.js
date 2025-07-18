// Prototype:- to deffine properties and methods that can be shared by all instances of an object
let computer = {CPU : 12};
let lenovo = {
    Screen: "HD",
    __proto__ : computer
};
// let tomHArdware ={};

console.log(`lenovo`, lenovo.__proto__);

let genericCar = {tyre : 4};

let tesla= {
    driver :"AI"
};
Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla` ,Object.getPrototypeOf(tesla));

