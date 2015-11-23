var http = require('http')
var bl = require('bl')
var data = [];

http.get(process.argv[2], function(r){
  r.pipe(bl(function(e, d){
    if (e) return console.error('err: ' + e);
    d = d.toString()
    console.log(d.length);
    console.log(d);
  }))
});
