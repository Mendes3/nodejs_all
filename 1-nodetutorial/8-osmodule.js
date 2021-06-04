//  os module is a built in module which helps to interact with the operating system and also with the server
const os =  require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// total memory
const memory = os.totalmem();
console.log(memory);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds.`)
console.log(`The system version is ${os.version()}.`)
console.log(`The system type is ${os.type()}.`)
console.log(`The system temporary directory is ${os.tmpdir()}.`)

const currentOS= {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);

