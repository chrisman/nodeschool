function duckCount() {
  var counter = 0
  for (v of arguments) {
    if (Object.prototype.hasOwnProperty.call(v, 'quack')) counter++
  }
  return counter
}

module.exports = duckCount

/*
Official solution:
```
function duckCount() {
     return Array.prototype.slice.call(arguments).filter(function(obj) {
       return Object.prototype.hasOwnProperty.call(obj, 'quack')
     }).length
   }
```
Beautiful.   
Turns out there are Array-like Objects like `arguments` and lists of DOM elementes (e.g., from getElemantsByClass..) that you can call Array prototype methods on.
*/
