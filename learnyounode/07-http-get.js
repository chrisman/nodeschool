var http = require('http')

http.get(process.argv[2], function(r){
  r.on('data', function(d){
    console.log(d.toString())
  })
})
