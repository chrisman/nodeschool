function reduce(arr, fn, initial) {
  // function(prev, curr, index, arr)
  return (function bite(i, val){
    if (i > arr.length - 1) return val
    return bite(i + 1, fn(val, arr[i], i, arr))
  })(0, initial) // IIFE!
}

module.exports = reduce

/*
1. There's a differenc b/t bite(i++ ... ) and bite(i + 1 ... ). that difference is that the original value of i is changed in the former, and not in the latter.

2. wtf IIFE. i've never seen that before.
*/
