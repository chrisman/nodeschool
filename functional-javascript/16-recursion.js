function getDependencies(tree, result) {
  result = result || []
  var dependencies = tree && tree['dependencies'] || []
  Object.keys(dependencies).forEach(function(d){
    var key = d + '@' + tree.dependencies[d].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(tree.dependencies[d], result)
  })
  return result.sort()
}

module.exports = getDependencies
