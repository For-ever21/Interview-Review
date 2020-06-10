// bind 的模拟实现

// *bind() 方法会创建一个新函数。当这个新函数被调用时，
// *bind()的第一个参数讲作为它运行时的this，之后的一序列参数将会在传递的实参前传入作为它的参数

// ?两个特点
// *1,返回一个函数
// *2,可以传入参数

var foo = {
  value: 1
}

function bar(name, age) {
  console.log(this.value)
  return {
    value: this.value,
    name,
    age
  }
}

let bindFoo = bar.bind(foo, 'durant');

// bindFoo(18);

// *手写bind的模拟实现
Function.prototype.bindDzh = function(context) {
  if (typeof this !== "function") {
    throw new Error('这是针对函数调用的bind方法')
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1) // 取下标1 之后的参数
  var fnop = function() {};
  var fn = function () {
    // 这个时候就是bind返回的函数的参数
    var bindArgs = Array.prototype.slice.call(arguments) // 这里使用了浅拷贝
    return self.apply(this instanceof fn ? this : context, args.concat(bindArgs))
  }
  // fn.prototype = this.prototype
  fnop.prototype = this.prototype
  fn.prototype = new fnop();
  return fn
}

let bindFooDzh = bar.bindDzh(foo, 'durant')

Function.prototype.bindDzh2 = function (context) {
  if (typeof this !== "function") {
    throw new Error('is not a function')
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1); // 取下标1之后的参数
  var fnop = function () {};
  var fn = function () {  
    var bindArgs = Array.prototype.slice.call(arguments); // 这里单纯为了浅拷贝，把参数提取出来
    return self.apply(this instanceof fn ? this : context, args.concat(bindArgs))
  }
  fnop.prototype = this.prototype;
  fn.prototype = new fnop();
  return fn
}

Function.prototype.bindDzh3 = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1); // 取下标1之后的参数
  var fnop = function() {};
  var fn = function () {
    var bindArgs = Array.prototype.slice.call(arguments); // 取所有参数
    return self.apply(this instanceof fn ? this : context, args.concat(bindArgs));
  }
  fnop.prototype = this.prototype
  fn.prototype = new fnop();
  return fn;
}

var bindDzh2Foo = bar.bindDzh3(foo, 'mahuateng');
console.log("bindDzh2Foo", bindDzh2Foo(23749));