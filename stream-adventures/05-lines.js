var through = require('through2')
var split = require('split')

var makeLower = 1
var transform = through(function(line, _, next){
  line = line.toString()

  line = (makeLower > 0)
    ? line.toLowerCase() + '\n'
    : line.toUpperCase() + '\n'

  this.push(line)
  makeLower *= -1
  next()
})

process.stdin
  .pipe(split())
  .pipe(transform)
  .pipe(process.stdout)
