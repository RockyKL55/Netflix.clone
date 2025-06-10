// JSON.stringify() = converts a js object to a json string
// JSON.parse() = converts a json string to a js object  


// let names = ["Rakesh","Puttu","pruthvi","rohit"];
// let person = {
//     "name": "Rocky",
//     "age": 25,
//     isEmployed: false,
//     hobbies:["cricket","cycling","roaming"]
// }
let people = [{
    "name": "Rocky",
    "age": 25,
    isEmployed: false,
    hobbies:["cricket","cycling","roaming"]
},
{
    "name": "Rocky",
    "age": 25,
    isEmployed: false,
    hobbies:["cricket","cycling","roaming"]
},
{
    "name": "Rocky",
    "age": 25,
    isEmployed: false,
    hobbies:["cricket","cycling","roaming"]
},
{
    "name": "Rocky",
    "age": 25,
    isEmployed: false,
    hobbies:["cricket","cycling","roaming"]
}]
let jsonstring = JSON.stringify(people)
console.log(jsonstring);



// let names = `["Rakesh","Puttu","pruthvi","rohit"]`;


let person = `{"name":"Rocky","age": 25, "isEmployed": false,"hobbies":["cricket","cycling","roaming"]}`


// let people = `[{ "name": "Rocky","age": 25, "isEmployed": false,"hobbies":["cricket","cycling","roaming"]},
//               { "name": "Rocky","age": 25,"isEmployed": false,"hobbies":["cricket","cycling","roaming"]},
//               {"name": "Rocky","age": 25,"isEmployed": false,"hobbies":["cricket","cycling","roaming"]},
//               {"name": "Rocky","age": 25,"isEmployed": false,"hobbies":["cricket","cycling","roaming"]}]`


let parsedData = JSON.parse(person)

console.log(person);

