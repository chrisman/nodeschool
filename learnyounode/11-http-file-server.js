var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){
  // console.log(process.argv[3]);
  fs.createReadStream(process.argv[3]).pipe(res)
})
server.listen(process.argv[2])
