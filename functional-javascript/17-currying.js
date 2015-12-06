function curryN(fn, n) {
  // SOLUTION GOES HERE
  n = n || fn.length
  return function curriedN(arg){
    if (n <= 1)
      return fn(arg)
    return curryN(fn.bind(this, arg), n - 1)
  }
}

module.exports = curryN

/*
  a curry is an incremental binding of a function.
  a chain of bound functions as long as the arity of the original function.
*/
