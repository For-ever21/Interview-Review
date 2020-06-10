// 词法作用域和动态作用域， 执行上下文栈，变量对象， 作用域链

// *JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。
// *因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。
// *而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。


// ?执行上下文栈
// *JavaScript的可执行代码分3种。全局代码，函数代码，eval代码
// *执行一个函数时，就会进行准备工作，这个准备工作，用专业术语讲叫，执行上下文
// *然后 js引擎通过执行上下文栈( Execution context stack )去管理执行上下文

// * 执行一个函数时，会创建一个执行上下文，并且会压入执行上下文栈，
// * 当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出


// ?变量对象

// *对于每个执行上下文来说，都有3个重要属性
// *1，变量对象（Variable Object, VO）
// *2，作用域链（scope chain）
// *3，this

// ?什么是变量对象
// *存储了上下文中定义的变量和函数声明

// *全局上下文 中的变量对象 就是全局对象
// *全局对象是作用域链里的头

// ?函数上下文
// *函数上下文中，我们用活动对象(activation object, AO)来表示变量对象

// ?执行上下文的代码分为两个阶段去进行处理：分析和执行，我们也可以叫做：
// *1，进入执行上下文
// *2，代码执行,进行赋值操作



// ?什么是作用域链
// *当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)
// *执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。
// *这样由多个执行上下文的变量对象构成的链表
// *就叫做作用域链

// *在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

// *进行赋值操作的变量声明的优先级比函数声明要高。 
var a = 8
var b = 7
function test(a, b) {
  console.log('1', b)
  console.log('2', d)
  c = 6;
  var c;
  a = 4;
  b = 5;
  console.log('3', b)
  console.log('4', c) 
  function d(){
    b = 3
    var b;
    console.log('5', b)
  }
  console.log('6', b)
  d()
}
test(1,2)


var name = 'window'; 
var doSth = function(){ 
   console.log(this.name); 
} 
doSth();


var name1 = 'window'; 
var doSth1 = function(){ 
  // "use strict";
   console.log(this.name1); 
} 
doSth1();

var name = 'BigBear'
var me = {
  name: 'xiuyan',
  hello: () => {
      console.log(this.name)
  }
}

me.hello()

// 自执行函数c 其实是 var d = function c () 
// 函数内部没有var声明，所以去最近的函数c
var c = 10;
(function c(){
    c = 20;
    console.log(c);  // function c
})();

var c = 10;
var c = function d(){
  c = 20;
  console.log(c);  // function c
};
console.log(c)
// c()