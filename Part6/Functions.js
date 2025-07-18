// Write a function named makeTea that take one parameter, typeOfTea, and returns a string like "making green tea" 
// when called with "green tea". Store the result in a variable named 'teaOrder'.

function makeTea(typeOfTea)
{
    return `making ${typeOfTea}`;
}

let teaOrder= makeTea("Green Tea");
console.log(teaOrder);


// Create a function named 'OrderTea' that takes one parameter 'teaType'. Inside this function, create another function named
// 'confirmOrder' that returns a msg like "Order confirmed for chai". Call confirmOrder from within Order and return the result"

function OrderTea(teaType)
{
    function confirmOrder()
    {
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}
let OrderConfirmation = OrderTea("chai");
console.log(OrderConfirmation);

// Write an arrow function named 'calculateTotal' that takes two paramters: "price" and 'quantity'. The function should return
//  the total cost by multiplying the 'price' and 'quantity'
// Store the result in a variable named 'totalCost'.

const calculateTotal =(price, quantity) =>
{
    return price * quantity;
}
let totalCost = calculateTotal(400 , 100);
console.log(totalCost);

// /Write a fucntion named 'processteaOrder' that takes another function 'makeTea', as a paramter and calls it with 
// the argument "earl grey". Return the result of calling 'makeTea'.

function makeTea(typeOfTea)
{    return `makeTea: ${typeOfTea}`;
}

function processteaOrder(teaFunction){
    return teaFunction("Earl grey");
}

let Order= processteaOrder(makeTea);
console.log(Order);

// Write a function named 'createmaker' that returns another function. The returned function should take one parameter, 'teaType'
// and return a message like "Making green tea"
// Store the returned fucntion in a variable named 'teaMaker' and call it with "green tea"

function createMaker(name)
{
    let score =100;
    return function (teaType)
    {
        return `Making ${teaType} ${name} ${score}`;
    };
}

let teaMaker = createMaker("Hitesh");
let result = teaMaker("green tea");
console.log(result);

