// 继承的多种方式和优缺点

// *1.原型链继承
function Parent1() {
  this.name = {a: 'dad'};
}
Parent1.prototype.getName = function() {
  console.log(this.name)
}
function Child1() {

}

Child1.prototype = new Parent1();

var child11 = new Child1();

child11.name.b = 'dad2'
child11.name.c = 'dad3'

var child12 = new Child1();
child11.getName()
child12.getName()
console.log("child12.name", child12.name)

// 引用类型的属性会被所以实例共享(对象或者数组，变量不共用一个内存，所以不会有影响)

// *2.借用构造函数继承
function Parent2() {
  this.name = ['kevin', 'daisy'];
}
function Child2() {
  Parent2.call(this)
}

var child21 = new Child2()
child21.name.push('wawa')
console.log("child21.name", child21.name)
var child22 = new Child2()
child22.name.push('wawa2')
console.log("child22.name", child22.name)

// *3.组合继承
// *4.原型式继承
// 类似 Object.create 的模拟实现，将传入的对象作为创建的对象的原型
// 缺点：包含引用类型的属性值始终都会共享相应的值
// *5.寄生式继承
// *6.寄生组合式继承