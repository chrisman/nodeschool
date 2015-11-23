var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, func){
  var matches = [];

  fs.readdir(dir, function(e, d){
    if (e) return func(e)
    else {
      for (var i in d){
        if (path.extname(d[i]) === '.' + ext)
          matches.push(d[i])
      }
      func(null, matches)
    }
  })
}
