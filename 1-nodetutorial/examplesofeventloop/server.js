// listen is aynchronous and it is kept alive 
// the server keeps on listening to the request and when it comes in it calls the callback
const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('Request event')
    res.end('Hello world')
})
server.listen(5000,()=>{
    console.log("Server listening on port:5000........")
})
