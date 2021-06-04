// event driven programming is used heavily in programming
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('respons',(name,id)=>{
  console.log(`Data received of user ${name} and id ${id} `)
})
customEmitter.on('respons',()=>{
  console.log('some other logic here')
})
customEmitter.emit('respons','john',34)
