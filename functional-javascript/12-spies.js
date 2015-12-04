function Spy(target, method) {
  var myFun = target[method];

  var result = {
    count: 0
  }

  target[method] = function(){
    result.count++
    return myFun.apply(this, arguments)
  }

  return result;
}

module.exports = Spy
