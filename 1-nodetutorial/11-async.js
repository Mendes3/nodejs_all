// this is asynchronous method and in this case we need to call callback when our functionality is complete

const {readFile, writeFile} = require('fs')
console.log('start');
 readFile('./content/first.txt','utf8',(err,result)=>{
     if(err){
         console.log(err)
         return;
     }
     const first = result


    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
   
        writeFile('./content/result-async.txt',`The result is ${first} ${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log('Done with the task');
        })
    })
}) 
console.log('starting next task');
// we start a start, while a user performing a task next user can also start the task
// due to call back functions, the code seems a bit messy
// we have alternative approach as well, promise and async await
// async await is easier to work with
