function loadUsers(userIds, load, done) {
  var acc = []
  userIds.forEach(function(id, idx){
    load(id, function(usr){
      acc[idx] = usr
    })
  })
  done(acc)
}

module.exports = loadUsers
