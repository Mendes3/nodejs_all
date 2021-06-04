const express = require('express')
const app = express()
const {products} =require('./data.js')


app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts)

})
// instead of hardcoding we have route parameter in express
// app.get('/api/products/1',(req,res)=>{
//     const SingleProducts = products.find((product)=>
//         product.id===1
//     )
//     res.json(SingleProducts)

// })
// we can find any product in any array by this method
// route parameters are placeholders
app.get('/api/products/:productID',(req,res)=>{

    const {productID} =req.params;
        const SingleProduct = products.find((product)=>
             product.id===Number (productID)
         )
         if(!SingleProduct){
             return res.status(404).send('Product doesnot')
         }
         res.json(SingleProduct)
    
     })

app.listen(5000,(res,req)=>{
    console.log("server is listening on port 5000....")
})