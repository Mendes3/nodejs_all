// we can also export arrays and object
// module.exports is an object so to make arrays and objects shareable we have to set a property as below 
// setting a property is not nedded in exporting variables

module.exports.items = ['item1','item2']
const person = {
    name:'john',
}
module.exports.SinglePerson = person
// arrays can be exported in this as well
// module.exports.itemsarray = items
// module.exports.person can also be done in place of const