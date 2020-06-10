// new的模拟实现

// *一句话介绍new：
// new运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
function Person (name, age) {
  this.name = name;
  this.age = age;
  return 'ads'
}

Person.prototype.height = 174

Person.prototype.do = function() {
  console.log('I want to play basketball,' + this.name)
}

var a = new Person('xiaohong', 18)

console.log(a.name)
console.log(a.height)
a.do()

function objectFactory() {
  var obj = new Object();
  var Constructor = [].shift.call(arguments) // 删除第一个元素，并返回该值
  obj.__proto__ = Constructor.prototype
  var ret = Constructor.apply(obj, arguments) 
  console.log("objectFactory -> ret", ret)
  return obj
  return typeof ret === 'object' ? ret || obj : obj; // 确保构造器总是返回一个对象  ||是处理null的情况
}

// 简写版
function objectFactory2(fn, ...arg) {
  var obj = Object.create(fn.prototype)
  // fn.apply(onj, arg);
  const ret = fn.call(obj, ...arg); // call 比apply高效
  return ret instanceof Object ? ret : obj

}

var b = objectFactory2(Person, 'xiaohong', 18)

console.log(b.name)
console.log(b.height)
b.do()


// 手写 new 实现
// 手写创建一个Phone构造函数
function Phone(price, system) {
  this.price = price;
  this.system = system;
  this.brand = 'xiaomi'
  return {
    price: this.price
  }
}

Phone.prototype.color = 'red';

Phone.prototype.caputre = function() {
  console.log(this.system + ', 采用xx技术')
}

var mix2 = new Phone(4599, 'android10');

// 第一版代码
function objectFactory3 () {
  // Constructor 取的是构造函数
  var obj  = new Object()
  var Constructor = [].shift.call(arguments); // 类数组对象需要使用function.call才能进行调用array的方法
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  console.log("ret", ret)
  return typeof ret === 'object' ? ret || obj : obj
}

objectFactory3(Phone, 4599, 'android10')
console.log("objectFactory3(Phone, 4599, 'android10')", objectFactory3(Phone, 4599, 'android10'))

