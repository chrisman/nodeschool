var http = require('http')
var fs = require('fs')
var through = require('through2')
var tr = function(buf, _, next){
  this.push(buf.toString().toUpperCase())
  next()
}

var server = http.createServer(function(req, res){
  if (req.method !== 'POST') res.end('Send me a POST request!')
  req.pipe(through(tr)).pipe(res)
}).listen(process.argv[2])
