const express = require('express');
const app =express()
// app.get read data
// app.post  insert data
// app.put update data
// app.delete delete data
// app.all
// app.use
// app.listen listening to which port?

app.get('/',(req,res)=>{
    res.status(200).send('Home page')

})
app.get('/about',(req,res)=>{
    res.status(200).send('About page')
})
// there is a default response already but we can set our own as well
app.all('*',(req,res)=>{
    res.status(404).send('<h1> Resource not found</h1>')
})
app.listen(5000,()=>{
    console.log("server is listening to port 5000.....")
})


