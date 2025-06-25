// let name = {
//     firstName:"Rocky",
//     lastName:"Rainbird",
// }
// let fullName = function(hometown){
//     console.log(this.firstName + ' ' + this.lastName + ' ' + "From" + ' ' + hometown)
// }
// fullName.call(name,"Tumkur")

// let name2 = {
//     firstName:"Virat",
//     lastName:"Kohli",
// }
// fullName.call(name2,'Gurgaon')



// let name = {
//     firstName:"Rocky",
//     lastName:"Rainbird",
// }
// let fullName = function(hometown){
//     console.log(this.firstName + ' ' + this.lastName + ' ' + "From" + ' ' + hometown)
// }
// fullName.apply(name,["Tumkur"])

// let name2 = {
//     firstName:"Virat",
//     lastName:"Kohli",
// }
// fullName.apply(name2,['Gurgaon'])



// let name = {
//     firstName:"Rocky",
//     lastName:"Rainbird",
// }
// let fullName = function(hometown){
//     console.log(this.firstName + ' ' + this.lastName + ' ' + "From" + ' ' + hometown)
// }
// fullName.bind(name,"Tumkur")
// let myName1 = fullName.bind(name,"Tumkur")
// myName1();

// let name2 = {
//     firstName:"Virat",
//     lastName:"Kohli",
// }
// fullName.bind(name2,'Gurgaon')
//  let myName = fullName.bind(name2,'Gurgaon')
//  myName();



// let person = {
//     name:"Rocky",
// }
// let details = function(state,country){
//     console.log(this.name + ' ' + state + ' ' + country);
// }
// details.call(person,"Karnataka","India")


// let person = {
//     name:"Rocky",
// }
// let details = function(state,country){
//     console.log(this.name + ' ' + state + ' ' + country);
// }
// details.apply(person,["Karnataka","India"])

// let person1 = {
//     name:"rohit",
// }
// details.apply(person1,["tumkur","upparhalli"])


// let num = {
//     oddnum:3,
// }
// let getNum = function(){
//     console.log(this.oddnum);
// }
// getNum.bind(num)
// let newNum = getNum.bind(num)
// newNum()


// const button = {
//   text: "Click Me",
//   click: function() {
//     console.log(this.text);
//   }
// };

// let fakeButton = button.click;
// fakeButton.bind(button)
// let newButton = fakeButton.bind(button)
// newButton()
// Fix the code using bind() to ensure 'this' refers to button object


// let car = {
//     brand:'toyato'
// }
// let details = function(){
//     console.log(this.brand);
// }
// details.call(car)

// let bike = {
//     brand:"Royal enfield"
// }
// details.call(bike)