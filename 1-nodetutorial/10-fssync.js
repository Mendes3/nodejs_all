// this is similar to 
// const fs = require('fs')
// fs.read
//readFileSync is a method to read from a file
//writeFileSync is a method to write to a file

const { readFileSync, writeFileSync } = require("fs")
console.log('start');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
 
// console.log(first, second)
// this is to write content in a file
// without third parameter it over rides the existing content
// we use float as append to append
writeFileSync('./content/result-sync.txt',`Here is the result: ${first},${second}`,{flag:'a'})
console.log('done with the task');
console.log('starting the next one');

// in synchronous approach, it operates line by line
// if a user takes time to write in a file then the applicatiion may go down
// the alternative to this approach is asynch approach