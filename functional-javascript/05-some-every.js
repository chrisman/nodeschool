function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function(s){
      return goodUsers.some(function(g){
        return g.id === s.id
      })
    })
  };
}

module.exports = checkUsersValid
