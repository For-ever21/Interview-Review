// JavaScript深入之call和apply的模拟实现

//* call 使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法

var foo = {
  value: 1
};

function bar() {
  console.log("bar -> this.value", this.value)
}
// bar.call(foo)

// 最简版
Function.prototype.call1 = function(context) {
  console.log(this)
  context.fn = this;
  context.fn();
  delete context.fn;
}

// bar.callBY(foo)

// *传入的参数不固定，怎么办
Function.prototype.call2 = function(context) {
  context.fn = this;
  var args = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push(`arguments[${i}]`)
  }
  eval('context.fn(' + args + ')')
  // context.fn();
  delete context.fn;
}

// * this参数可以传null,走window，函数是可以有返回值的
Function.prototype.call3 = function(context) {
  var context = context || window;
  var args = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push(`arguments[${i}]`)
  }
  var results = eval('context.fn(' + args +')');
  delete fn.context
  return results
}





// 自己手写的call函数



// dzh.call(null);

Function.prototype.callDzh = function(context) {
  context = context || window;
  var args = [];
  context.fn = this;
  console.log(arguments)
  for(let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`)
  }
  // 这里args 会调用array。tostring的方法
  console.log(args)
  let result = eval('context.fn('+ args +')');
  delete context.fn;
  return result
}
// 处理不定参数


// eg2 手写call函数
Function.prototype.callDzh2 = function (context, ...args) {
  // let handler=Symbol();// 生成一个唯一的值，用来作为要绑定对象的属性key 代替fn
  // 如果第一个参数为引用类型或者null 类型的判断
  //   if(typeof context==='object') {
  //     // 如果为null 则this为window
  //     context=context||window;
  // } else {
  //     // 如果为undefined 则this绑定为window
  //     if(typeof context==='undefined') {
  //         context=window;
  //     } else {
  //         // 基本类型包装  1 => Number{1}
  //         context=Object(context);
  //     }
  // }
  context  = context || window;
  context.fn = this;
  var args = []
  // let result = context.fn(...args)
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments['+ i +']')
  }
  let result = eval('context.fn(' + args +')');
   // 执行这个函数。这时这个函数内部this绑定为cxt，储存函数执行后的返回值。 可以进行扩展运算
  // let result=context.handler(...args);
  delete context.fn;
  return result
}



// bar.callDzh(foo)
// dzh.callDzh(null)
// console.log("dzh.callDzh(bibao, '12', '32')", dzh.callDzh(bibao, '12', '32'))


// apply的模拟实现
Function.prototype.apply2 = function(context, arr) {
  context = context || window;
  var args = [];
  var result;
  context.fn = this;
  if (!arr) {
    result = context.fn();
  } else {
    for(var i = 0, len = arr.length; i < len; i++) {
      args.push(`arr[${i}]`)
    }
    result = eval('context.fn(' + args + ')');
  }
  delete context.fn;
  return result
}

Function.prototype.applyDzh2 = function (context, arr) {
  context = context || window;
  var handler = Symbol();
  var result;
  context.handler = this;
  if (!arr) {
    result = context.handler()
  } else {
    var args = []
    for(var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.handler(' + args + ')')
  }
  delete context.handler
  return result;
}

var val = 1;

var bibao = {
  val: 2
}


function dzh(name, age) {
  console.log("dzh -> this.val", this.val)
  return {
    value: this.val,
    name: name,
    age: age
  }
}

// dzh.apply(null)
dzh.applyDzh2(bibao)
// console.log("dzh.callDzh(bibao, '12', '32')", dzh.apply2(bibao, ['12', '32']))



