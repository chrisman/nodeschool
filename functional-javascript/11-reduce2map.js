module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, idx, arr){
    acc.push(fn.call(thisArg, item, idx, arr))
    return acc
  }, [])
}
