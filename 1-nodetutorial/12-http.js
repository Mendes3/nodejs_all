// http is another built in module which allows us to setup a web server
const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Welcome to our home page');
//     }
//     else if(req.url ==='/about'){
//         res.end('Welcome to our about page');

//     }
//     else{
//     res.end(` 
//     <h1>Oops!</h1>
//     <p>We cant seem to find the page you are looking for</p>
//     <a href='/'>Back home </a>
//     `)
//     }


// })
// server.listen(5000)

// on approach
const server1 = http.createServer()
server1.on('request',(req,res)=>{
    res.end("Welcome")
    console.log('hi')
})
server1.listen(5000)
