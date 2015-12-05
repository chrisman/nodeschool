function repeat(operation, num) {
  if (num <= 0) return
  operation()
  setTimeout(function(){
    repeat(operation, --num)
  })
}

module.exports = repeat

/*
official solution only called a timeout every
(num % 10 === 0) times. makes sense.
*/
