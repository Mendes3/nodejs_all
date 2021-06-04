// sending back more info to the user
// mime types for the types of content we are sending back
// if we change the mime type header the browser will interpret it
// we will pass the content of the file but not the file itself (html file)
const { readFileSync } = require('fs')
const http = require('http')
const homepage = readFileSync('./form.html')
const homebg = readFileSync('./bg.jpeg')
// const { url } = require('inspector')
const server =http.createServer((req,res)=>{
    // console.log(req.method)
    // console.log(req.url)
    if(req.url==='/'){
    res.writeHead(200,{'content-type':'text/html'}) //if we write /plain, it treats data written as plain text
    res.write(homepage)
    res.end()
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'}) //if we write /plain, it treats data written as plain text
    res.write('<h1>About page</h1>')
    res.end()

    }
    else if(req.url==='/bg.jpeg'){
        res.writeHead(200,{'content-type':'image/jpeg'}) //if we write /plain, it treats data written as plain text
    res.write(homebg)
    res.end()
    }

    else {
        res.writeHead(404,{'content-type':'text/html'}) //if we write /plain, it treats data written as plain text
        res.write('<h1>Page Not found</h1>')
        res.end()

    }

})

server.listen(5000);
 
  