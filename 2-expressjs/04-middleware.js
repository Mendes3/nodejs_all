// morgan is the third party middlware for login
//  to install it, npm i morgan
const morgan = require('morgan')
const express =  require('express')
const app = express()
const logger = require('./logger.js')
const authorize = require('./authorize')

// app.use('/api',[logger,authorize])
// it invokes this in all the route and as everything goes in order, it should be above all the route methods
// the path here is given such that, in that path only middleware function will be invoked

app.use(morgan('tiny'))
// req = > middleware =>res
app.get('/', (req,res)=>{
    res.send('hello, how are you? wont you tell me your name?')
})
app.get('/about',(req,res)=>{
    res.send("This is about page")
})
app.get('/api/products',(req,res)=>{
    res.send("Products")
})
app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send("Items")
})

app.listen(5000,(req,res)=>{
    console.log("server is listening on port 5000....")
})