const http = require("http");
let server=http.createServer((req,res)=>{

    if(req.url=="/about"){
        res.write("<h1>Welcome to about page</h1>")
        res.end()
    }

    else if(req.url=="/blog"){
        res.write("<h1>Welcome to blog page</h1>")
        res.end()
    }

    else{
        res.write("<h1>Welcome to home page</h1>")
        res.end()
    }
})

server.listen(3001);
