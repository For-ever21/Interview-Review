// debounce 防抖：就是等触发事件n秒内，不再触发这个事件后，我才执行这个事件
var count = 1

// this指向
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this;
    clearTimeout(timeout)
    timeout = setTimeout(function() {
      func.call(context)
    }, wait)
  }
}

// event对象
function debounce1(func, wait) {
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.call(context, args)
    }, wait)
  }
}


// 立即执行 immediate + 返回值
function debounce2(func, wait, immediate) {
  var timeout, result;
  return function() {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果是立即执行的话
      var callNow = !timeout;
      setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) result = func.call(context, args)
    } else {
      timeout = setTimeout(function() {
        result = func.call(context, args)
      })
    }
    return result;
  }
}

// 增加取消操作
// 立即执行 immediate + 返回值
function debounce3(func, wait, immediate) {
  var timeout, result;
  var debounced = function() {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果是立即执行的话
      var callNow = !timeout;
      setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) result = func.call(context, args)
    } else {
      timeout = setTimeout(function() {
        result = func.call(context, args)
      })
    }
    return result;
  }

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  }

  return debounced;
}

// !什么是防抖，就是触发一个事件后，在这个间隔期内，没有再次触发该事件时。才执行，期间如果再次触发该事件，会重置该间隔时间

function debounce4 (func, wait, immediate) {
  var timeout = null;
  var result = null;
  var debounced =  function() {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout)

    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, wait)
    }
    return result;
  }

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout  = null;
  }

  return debounced;
}