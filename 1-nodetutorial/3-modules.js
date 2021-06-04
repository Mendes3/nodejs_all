
//require - function to use modules (common Js)
//modules - info about current module (file)
// commonsJS-every file is module by default
const names = require('./4-names')
const functs = require('./5-utils')
const data = require('./6-alternativeflavour')

require('./7-mindgrenade')
console.log(data);

functs.sayHI('Manita');
functs.sayHI(names.john);
functs.sayHI(names.peter);
functs.age(21);