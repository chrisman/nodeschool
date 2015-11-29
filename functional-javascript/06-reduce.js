function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(p, c){
    if (!(c in p)) p[c] = 0
    p[c] = p[c] + 1
    // or, increment or initialize:
    // p[c] = ++p[c] || 1
    return p
  },{})
}

module.exports = countWords
