// the offloading of browser is done by nodejs as it is async 
//  example showing async
// the callback is executed only when other important tasks are executed
console.log("Task starting")
setInterval(()=>{
  console.log("This is inside set interval");
},0)
console.log("This is outside the function, task ended")

console.log("starting settimeout ")
setTimeout(()=>{
    console.log("this is timeout first task")
},0)
console.log("nexxt task strting, set time our")
// setinterval and settimeout are async methods so it offloads the call back and performs the important tasks first
 