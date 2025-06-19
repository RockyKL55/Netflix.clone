// let swiggy_order = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     let x = true
//         if (x){
//              resolve("Accepted the order")
//         } 
//         else{
//              reject("No food")
//         }
//         }, 2000)
//     }
// ) 
// swiggy_order.then((res) => console.log(res))
//             .then(() => console.log("Food will reach soon"))
//             .catch((res) => console.log(res))
//             .finally(()=> console.log("Transaction completed"))


// -------------------ALL--------------------------


// let p1 = new Promise((res,rej)=>{
//         res("Order accepted")
// })
// let p2 = new Promise((res,rej)=>{
//     setTimeout(() =>{
//         rej("Food getting prepared")},5000)
// })
// let p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("Order delivered")}, 1000)
//    })

// Promise.all([p1,p2,p3])
//   .then((results)=>console.log(results))
//   .catch((results)=>console.log(results))


// ----------------------RACE-------------------------


// let p1 = new Promise((res,rej)=>{
//         rej("Ordered food")
//     })
// let p2 = new Promise((res,rej)=>{
//         res("Food is prepared")
//     })    
// let p3 = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             rej("Amount not paid")}, 4000 )
// })

// Promise.race([p3,p1,p2])
//     .then((results)=> console.log(results))
//     .catch((results)=> console.log(results))


// ------------------------ALLSETTLED--------------------


// let p1 = new Promise((res,rej)=>{
//         res("Ordered food")
// })
// let p2 = new Promise((res,rej)=>{
//         res("Food is prepared")
// })
// let p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("Transaction failed")},4000)
// })
// Promise.allSettled([p1,p2,p3])
//     .then((results) => console.log(results))
//     .catch((results) => console.log(results))


// -----------------ANY------------------ 


// let p1 = new Promise((res,rej)=>{
//         res("Order taken")
// })
// let p2 = new Promise((res,rej)=>{
//         res("Food is ready")
// })
// let p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("Transaction completed")},2000)
// })

// Promise.any([p1,p2,p3])
//     .then((results)=> console.log(results))
//     .catch((results)=> console.log(results))
    

// ----------------------------------------------------------------------


// let p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Success")},2000)
// })
// p1.then((res)=> console.log(res))

let p1 = new Promise((res,rej)=>{
    let num = 8
    if(num<10){
        res("Resolved")
    }
    else{
        rej("rejected")
    }
})
p1.then((results)=> console.log(results))
  .catch((results)=> console.log(results))