let p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Hello Rocky")
    },2000)
})
p1.then((result)=>{console.log(result)})