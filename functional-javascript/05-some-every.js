function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    submittedUsers.every(function(c){
      // return (c.id in goodUsers);
      // console.log(c.id + ' ... ' + goodUsers[c.id]);
      if (c.id in goodUsers) return true
      else return false
    })
  };
}

module.exports = checkUsersValid
