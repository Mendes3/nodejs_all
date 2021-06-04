//local
const secret = 'Super secret'
// shareable
const john = 'john';
const peter = 'peter';

// console.log(module);
// module is an object and export is a method inside module
// we are only sharing john and peter but not secret
module.exports = { john, peter}