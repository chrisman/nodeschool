var through = require('through2')
var stream = through(write)

function write(buff, encoding, next){
  this.push(buff.toString().toUpperCase())
  next()
}

process.stdin.pipe(stream).pipe(process.stdout)
