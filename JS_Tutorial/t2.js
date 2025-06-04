// ------Truthy and Falsy values-------
// if the value is 0 the output will be falsy other than 0, positive or negative the output will be truthy

let some_var

// some_var = true             Truthy Value
// some_var = false            Falsy Value
// some_var = 0                Falsy Value
// some_var = -10              Truthy Value
// some_var = 1                Truthy Value
// some_var = null             Falsy Value
// some_var = undefined        Falsy Value
// some_var = NaN              Falsy Value
// some_var = ''               Falsy Value


if (some_var){
    console.log('it is truthy value');
}
else{
    console.log('it is falsy value');   
}
