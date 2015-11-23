var http = require('http')
var bl = require('bl')

var urls = process.argv.slice(2)
var results = []
var count = 0

function getHttp(n){
  http.get(urls[n], function(r){
    r.pipe(bl(function(e, d){
      if (e) return console.error(e);

      results[n] = d.toString()
      count++

      if (count === urls.length)
        results.forEach(function(str){
          console.log(str)
        });
    }));
  });
}

for (var i in urls) getHttp(i)
