let car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    start: function()
    {
        return `${this.make} car got started in ${this.year}`;
    },
};

console.log(car.start());

function Person(name, age)
{
    this.name = name;
    this.age = age;
}

let john = new Person("John Doe", 20)
console.log(john.name);

// Prototype and Protoypal chain

function Animal(type)
{
    this.type = type
}

Animal.prototype.speak = function() //prototypal chain
{
    return `${this.type} makes a sound`
}

Array.prototype.hitesh = function()
{
    return `Custom methods ${this}`
}

let myArr = [1,2,3,4];
console.log(myArr.hitesh());

let myNewArr = [1,2,3,4,5];
console.log(myNewArr.hitesh());

class Vehicle {

    constructor(make, model)
    {
        this.make = make
        this.model = model
    }

    start()
    {
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle{

    drive()
    {
        return `${this.make} : This is an inheritance example`
    }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

let VehOne =  new Vehicle("Toyota", "Corolla");
console.log(VehOne.make);


// Encapsulation : restricting direct access to data object or object data

class BankAccount{
    #balance =0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
console.log(account.getBalance());


// Abstraction: hide the complex implementation details
 
class CoffeMachine{
    start(){
        // filter value
        return `Starting the machine....`;
    }

    brewCoffee(){
        // Complex calculation
        return `Brewing coffee`;
    }

    pressStartButton(){
       let msg1 = this.start();
       let msg2 = this.brewCoffee();
       return `${msg1} + ${msg2}`;
    }
}

let myMachine = new CoffeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

// Polymorphism : ability os something to have or to be displayed in more than one form

class Bird{
    fly(){
        return `flying....`;
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguins can't fly;`
    }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// Static method : Special method which can only be called by the class itself, nobody else can call it

class Calculator{
    static add(a, b){
        return a+b;
    }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,3)); //Error

console.log(Calculator.add(2,3));

// Getters and setters
class Employee{
    #salary;
    constructor(name, salary){
        if(salary < 0)
        {
            throw new Error("Salary cannot be in negative")
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `You are not allowed to see the salary`;
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Salary")
        }else{
            this._salary = value;
        }
    }
}
let emp = new Employee("Alice",  -5000);
console.log(emp.salary);
emp.salary = 60000;
