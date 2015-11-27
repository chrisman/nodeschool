/*
this is pretty much exactly the program from solution.js

another duplexer2 issue?
*/

var dupe = require('duplexer2')
var through = require('through2').obj

module.exports = function(counter){
  var counts = {}
  var input = through(write, end)
  return dupe(input, counter)

  function write(line, _, next){
      counts[line.country] = (counts[line.country] || 0) + 1
      next()
  }
  function end(done){
    counter.setCounts(counts)
    done()
  }

};
