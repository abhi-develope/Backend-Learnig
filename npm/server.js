const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url == '/hello'){
        res.end('hellow World!')
    }else{
        res.end("You are trying to hit a wrong url")
    }
})

server.listen(8000, ()=>{
    console.log("server is started");
})