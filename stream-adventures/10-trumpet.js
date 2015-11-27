var trumpet = require('trumpet')
var through = require('through2')
var tr = trumpet()

var up = function(buf, _, next){
  this.push(buf.toString().toUpperCase())
  next()
}

var loud = tr.select('.loud').createStream()
loud.pipe(through(up)).pipe(loud)
process.stdin.pipe(tr).pipe(process.stdout)
