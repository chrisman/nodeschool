var filepath = process.argv[2]
var filetype = '.' + process.argv[3]
var fs = require('fs')
var path = require('path')

fs.readdir(filepath, function(err, list){
  for(var i = 0; i < list.length; i++){
    if (path.extname(list[i]) === filetype)
      console.log(list[i]);
  }
});
