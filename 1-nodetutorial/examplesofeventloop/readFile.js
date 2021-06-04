// the concept of event loop is that, immediate tasks are run prior and then callbacks
// event loop example
// this is async version of read file method
// so it offloads the callback  
const {readFile}=require('fs')
console.log("starting the task")
readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err);
    console.log("Checking for error, 1st task")
    return;
  }
  console.log(result);
  console.log("First task completed")

})
console.log("next task starting")
