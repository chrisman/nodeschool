var ls = require('./06-module')

ls(process.argv[2], process.argv[3], function(e, d) {
  if (e) return console.error('error: ', e)
  for (var i in d) {
    console.log(d[i]);
  }
})
