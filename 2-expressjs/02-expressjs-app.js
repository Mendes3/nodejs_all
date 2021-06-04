const http = require('http')
const path =require('path')
const express = require('express')
const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbarapp/index.html'))
    
// adding to static assets
// })
app.get('*',(req,res)=>{
    res.status(404).send('Resource not found')
})
app.listen(5000,(req,res)=>{
    console.log("Server is listening on port 5000....")
})