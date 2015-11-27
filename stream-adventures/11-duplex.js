/*
There is an open and known issue of the 0.0.2 -> 0.1.0 update of duplexer2 breaking this:
https://github.com/substack/stream-adventure/issues/155
*/

var spawn = require('child_process').spawn
var dupe = require('duplexer2')

module.exports = function(cmd, args) {
  var child = spawn(cmd, args)
  return dupe(child.stdin, child.stdout)
}
