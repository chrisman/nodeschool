var file = process.argv[2]
var fs = require('fs')

fs.readFile(file, 'utf8', function(err, buff){
  console.log(buff.split('\n').length-1);
})
