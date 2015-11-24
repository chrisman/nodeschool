var net = require('net')

var server = net.createServer(function (socket){
  var date = new Date()
  // console.log(getDateFormat(date));
  // console.log(date.getFullYear() + '-' + date.getMonth());
  // socket.write(date)
  // console.log(socket);
  socket.end(getDateFormat(date))
})
server.listen(process.argv[2])

var getDateFormat = function(date){
  // "YYYY-MM-DD hh:mm"
  var result =
    date.getFullYear() +
    '-' +
    (date.getMonth()+1) + // starts at 0
    '-' +
    date.getDate() +
    ' ' +
    ((date.getHours().length === 2) ? date.getHours() : ('0' + date.getHours())) +
    ':' +
    date.getMinutes()
  return result
}
