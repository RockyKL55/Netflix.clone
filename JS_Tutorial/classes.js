// class Vehicle {
//     constructor(wh,wt,name){
//         this.wheels = wh
//         this.weight = wt
//         this.name = name
//         this.color = "Black"
//         this.currentLocation = "Bengaluru"
//     }

//     getDetails(){
//         console.log(`This ${this.name} has ${this.wheels} wheels & weight of ${this.weight},going for ${this.currentLocation}`);
//     }

//     travel(location){
//         this.currentLocation = location
//     }

//     get getVehicleColor(){
//         console.log(`this vehicle color is:${this.color}`);
//     }

//     set setVehicleColor(color){
//         this.color = color
//     }

// }
    
// let car = new Vehicle(4,'4t','Toyota')
// let bus = new Vehicle(6,'5t','VRL')
// let jeep = new Vehicle(4,'3t','Thor')
// let car2 = new Vehicle(4,'3t','Hyundai')


// console.log(car.wheels,car.weight);
// jeep.getVehicleColor
// jeep.setVehicleColor = "RED"
// jeep.getVehicleColor

// -------------------------------------------------------------

// class father {
//     constructor(bike){
//         this.house = "2 BHK"
//         this.car = "KIA"
//         this.bike= bike

//     }
//     get details(){
//         console.log(`the father has ${this.house} house & ${this.car} car`);
        
//     }
// }

// let f1 = new father()
// f1.details

// class son extends father{
//     constructor(bike){
//         super(bike)
//     }
//     get details(){
//         console.log(`son has ${this.house} house, ${this.car} car & ${this.bike} bike`);
        
//     }
// }

// let s1 = new son("GT Continental")
// s1.details

// --------------------------------------------------------

// class person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
// }

// let p1 = new person("rocky",25)
// console.log(`unknown person name is ${p1.name} & his age is ${p1.age}`);

// ---------------------------------------------------------------------------------

// class car{
//     constructor(){
//         this.brand = "KIA"
//         this.model = "seltos"
//         this.year = 2017
//     }
//     getDetails(){
//         console.log(`${this.brand} car, model is ${this.model} & its manufactured in ${this.year}`);
//     }
// }

// let c1 = new car()
// c1.getDetails()

// --------------------------------------------------------------------------------

// class product{
//     constructor(name,price){
//         this.name = name
//         this.price = price
//     }
// }
// let p1 = new product("mobile",20000)
// let p2 = new product("laptop",50000)

// console.log(`product:${p1.name}, price:${p1.price}`);
// console.log(`product:${p2.name}, price:${p2.price}`);

// -----------------------------------------------------------------

// class rectangle{
//     constructor(){
//         this.width = 8
//         this.height = 12
//     }
//     getArea(){
//         console.log(this.width * this.height);
//     }
// }
// let r1 = new rectangle()
// r1.getArea()

// -----------------------------------------------------

// class BankAccount{
//     constructor(){
//         this.accountNumber = 4613
//         this.balance = 500
//     }

//     deposit(amount){
//         this.balance=this.balance + amount
//         console.log(`deposited ₹ ${amount}.New balance: ₹${this.balance}`);
//     }

//     withdraw(amount){
//         if(amount<=this.balance){
//             this.balance =this.balance-amount
//             console.log(`amount withdrawn ${amount}. balance ${this.balance}`);
//         }
//         else{
//             console.log("insufficient balance");
//         }
//     }
// }
// let bc = new BankAccount()
// bc.deposit(5000)
// bc.withdraw(4000)

// ----------------------------------------------------

// class Animal{
//     constructor(){

//     }
//     makeSound(){
//         console.log("bow");
//     }
// }
// let a1 = new Animal()
// // a1.makeSound()
// class Dog extends Animal{
//     constructor(){
//         super()
//     }
//     makeSound(){
//         console.log("woof");
//     }
// }
// let d1 = new Dog()
//     a1.makeSound()
//     d1.makeSound()

// --------------------------------------------

class Math{
    static add(x,y){
        console.log(x+ y);
    }
}
let Math1 = new Math()
Math.add(5,10)