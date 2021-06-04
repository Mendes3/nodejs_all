// path module is another built in module which allows us to access file path easily
const path = require('path')

// combines the path of files into one
const filepath = path.join('/content','subfolder','text.txt')
console.log(filepath);

// displays only the base of the filepath
const base = path.basename(filepath)
console.log(base)

//returns an absolute path, this is necessary in future
// combines the filepath with present directory name
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);

const filepathspecs = {
    sep: path.sep,
    join: path.join(),
    console:path.console,

}
console.log(filepathspecs);
