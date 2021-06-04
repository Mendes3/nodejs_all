const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require ('./routes/auth')

app.use(express.static('./methods-public')) //static assets
app.use(express.urlencoded({extended:false})) //all the incoming requests use this middleware and it parses all the incoming requests with url encoded payloads
app.use(express.json()) //parse json

app.use('/api/people',people) 
app.use('/login',auth)

// how we can add data to the server? for this we use post method
app.listen(5000,(req,res)=>{
    console.log("server is listening on port 5000.....")
})
