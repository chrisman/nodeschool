var combine = require('stream-combiner')
var split = require('split')
var thru = require('through2')
var zlib = require('zlib')

module.exports = function(){
  // read newline-separated json,
  // group books into genres,
  // then gzip the output with zlib.createGzip()
  var thingDoer = thru(write, end)
  var myGenre

  function write(line, _, next){
    if (!line.length) return next()

    var row = JSON.parse(line)
    if (row.type === 'genre') {
      if (myGenre)
        this.push(JSON.stringify(myGenre) + '\n')
      myGenre = { name: row.name, books: [] }
    }
    else if (row.type === 'book')
      myGenre.books.push(row.name)
    next()
  }

  function end(next){
    if (myGenre)
      this.push(JSON.stringify(myGenre) + '\n')
    next()
  }

  return combine(split(), thingDoer, zlib.createGzip)
}
