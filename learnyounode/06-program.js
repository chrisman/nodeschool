var fs = require('fs')
var ls = require('./06-module')

fs.readdir(process.argv[2], function(e, d){
  ls(process.argv[2], process.argv[3], function(e){

  })
})
