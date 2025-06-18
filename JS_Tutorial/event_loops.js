// function func1(){
//     console.log("function 1 is executed");
// }
// function func2(){
//     console.log("function 2 is executed");
// }
// function func3(){
//     setTimeout(()=>console.log("function 3 is executed"),4000);
// }
// function func4(){
//     console.log("function 4 is executed");
// }

// func1()
// func2()
// func3()
// func4()



// let isDelivered = false

// function func1(){
//     console.log("create order");
// }
// function func2(){
//     console.log("make the payment");
// }
// function func3(){
//     setTimeout(()=>{
//         console.log("deliver the order"),
//         isDelivered = true
//     },4000);
// }
// function func4(){
//     if(isDelivered){
//      console.log("eat");
//         clearInterval(intervalId)
//     }
// }

// func1()
// func2()
// func3()
// let intervalId = setInterval(func4,1000)
// func4()





function func1(){
    console.log("function 1 is executed");
}
function func2(){
    console.log("function 2 is executed");
}
function func3(cb){
    setTimeout(()=>{
        console.log("function 3 is executed")
        cb()
    },4000);
}
function func4(){
    console.log("function 4 is executed");
}

func1()
func2()
func3(func4)