var http = require('http')
var data = [];

http.get(process.argv[2], function(r){
  r.setEncoding('utf8')
  data += r
});

http.end()
