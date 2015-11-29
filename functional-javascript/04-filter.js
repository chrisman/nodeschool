function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.map(function(o){
    return o['message']
  }).filter(function(i){
    return i.length < 50
  })

}

module.exports = getShortMessages
