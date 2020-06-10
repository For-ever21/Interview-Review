// javascript深入系列之 从原型到原型链
function Person (){}

var person = new Person()
console.log("Person -> person", person.prototype)
console.log(Person.__proto__ === Person.prototype) // Person.prototype = 实例原型

// ?什么是原型
// *原型就是JavaScript对象（null除外）创建的时候，就会与之关联另一个对象，这个对象称之为原型，每一个对象都会从原型“继承”属性

// ?什么是prototype(显式原型) --用于实现原型的继承与属性的共享
// *函数创建的过程中会拥有一个prototype的属性(prototype 是函数才会有的属性)，这个属性指向函数的原型对象

// ?什么是__proto__(隐式原型) 构成原型链，同样也适用于原型的继承
// *这是每一个JavaScript对象（null除外）都具有的一个属性，这个属性会指向对象的原型

// ?什么是constructor
// *指向实例的倒是没有，引用一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，每个原型都有一个constructor属性去指向关联的构造函数

console.log(Person.prototype.constructor === Person)

// *顺便学习一个ES5的方法，可以获取对象的原型

console.log(Object.getPrototypeOf(person) === Person.prototype)

// ?实例与原型
// *当读取实例的属性时，如果读取不到，它就会查找与对象相关联的原型的属性，如果还找不到，就会找原型上的原型，直到最顶层为止

// ?原型的原型
// *原型的对象是通过Object构造函数生成的

// ?原型链
// *那Object.prototype的原型指向为null
// *由__proto__相互关联的原型组成的链状结构就是指原型链

