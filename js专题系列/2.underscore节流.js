// throttle 节流：

// *什么是节流：节流就是，每隔一段时间，执行一次事件

// 使用时间戳
function throttle(func, wait) {
  var context, args;
  var previous = 0;

  return function() {
    var now = +new Date();
    context = this;
    args = arguments;
    console.log(now, previous)
    if ((now - previous) > wait) {
      func.apply(context, args)
      previous = now;
    }
  }
}
var index = 0
function foo() {
  index++
  console.log("foo -> index", index)
}
// document.body.onclick = throttle(foo, 1000);

// 使用定时器
