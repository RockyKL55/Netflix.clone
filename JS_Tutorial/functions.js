// function greet(name,age,city){
//     console.log(`hii i am ${name}, i am ${age} yeras old, i am from ${city}`)
// }
// greet('Virat',36,'bengaluru')


// function printAll(){
//     arguments
//     console.log(arguments);
// }
// printAll(11,22,33,44,55,66,77,88,99,12,13,14)


// function numCode(){
//     for(let arg in arguments)
//         console.log(`Argument #${parseInt(arg)+1} is ${arguments[arg]}`);
        
// }
// numCode(11,22,33,44,55,66,77,88,99,12,13,14)


// -------invocate function-------

// (function (num1){
//     console.log(num1 * num1);
    
// })(9)


// ---------expression function---------

let code = function(num1){
    console.log(num1 * num1);
}
code(6)
code(9)
code(7)

