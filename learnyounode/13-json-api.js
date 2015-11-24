var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res){
  if (req.method != 'GET')
    return res.end('send me a GET\n')

  res.writeHead(200, { 'Content-Type': 'application/json' })
  var iso = url.parse(req.url, true).query.iso;
  var call = url.parse(req.url, true).pathname
  console.log(iso);
  var dateReq = new Date(iso)
  var dateResJSON = {}

  if (call === '/api/parsetime') {
    dateResJSON.hour = dateReq.getHours()
    dateResJSON.minute = dateReq.getMinutes()
    dateResJSON.second = dateReq.getSeconds()
  } else if (call === '/api/unixtime'){
    dateResJSON.unixtime = Date.parse(url.parse(req.url, true).query.iso)
  }

  res.end(JSON.stringify(dateResJSON))
}).listen(process.argv[2])
