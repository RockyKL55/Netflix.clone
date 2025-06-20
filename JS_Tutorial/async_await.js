// let p1 = new Promise((res,rej)=>{
//         setTimeout(()=>{
//                 res("Hello1")},3000)          
// })
// let p2 = new Promise((res,rej)=>{
//         setTimeout(()=>{
//                 res("Hello2")},5000)          
// })
// let p3 = new Promise((res,rej)=>{
//         setTimeout(()=>{
//                 res("Hello3")},3000)          
// })
// let p4 = new Promise((res,rej)=>{
//         setTimeout(()=>{
//                 res("Hello4")},100)          
// })

// async function executePromises(){
//     let response1 = await p1
//     console.log(response1);
    
//      let response2 = await p2
//     console.log(response2);

//      let response3 = await p3
//     console.log(response3);

//      let response4 = await p4
//     console.log(response4);
// }
// executePromises().then((results)=>console.log(results))


let p1 = new Promise((res,rej)=>{
        setTimeout(()=>{
                res("Hello1")},3000)          
})
let p2 = new Promise((res,rej)=>{
        setTimeout(()=>{
                res("Hello2")},5000)          
})
let p3 = new Promise((res,rej)=>{
        setTimeout(()=>{
                res("Hello3")},3000)          
})
let p4 = new Promise((res,rej)=>{
        setTimeout(()=>{
                res("Hello4")},100)          
})

async function executePromises(){
    let response1 = await Promise.all([p1, p2, p3, p4]) 
    console.log(response1);
    
}
executePromises()