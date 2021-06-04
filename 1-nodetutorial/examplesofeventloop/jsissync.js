//    npm --version
// local dependency -use it only in this particular project
// npm i <packageName>
// global dependency -use it in any project
// package.json - manifest file (stores important info about project/package)
// manual approach ( create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
console.log('hello people')
console.log('Hello beautiful people')
//    after adding nodeman and changing things in package.json, we dont have to keep on typing node app.js
// example about time taking for loop
// this shows that js is sync and single threaded
console.log("First Task")
console.time();
for(let i=0;i<1000;i++){
console.log('hey, everyone is waiting on me');
}
console.timeEnd();
console.log('Second task')

