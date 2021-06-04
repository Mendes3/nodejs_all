// await async concept using try catch
// when we use async await, we can wait till promise is settled
// instead of nesting callbacks we can use async await and this is the best approach
const {readFile, writeFile} = require('fs').promises

const start = async()=>{
  try{
    const first = await readFile('./content/first.txt','utf8')
    const second =await readFile('./content/second.txt')
    await writeFile('./content/result-mind-grenade',`This is awesome ${first} ${second}`,{flag:'a'})
    console.log(first)
  }catch(error){
    console.log(error);

  }

}
start();