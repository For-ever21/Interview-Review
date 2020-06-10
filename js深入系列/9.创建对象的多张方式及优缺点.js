// 创建对象的多种方式以及优缺点

//* 1.工厂模式
// 对象无法识别，因为所有实例指向一个原型
function createPerson1(name) {
  var obj = new Object();
  obj.name = name;
  obj.getName = function () {
    console.log('my name is' + this.name)
  };
  return obj;
}

var person1 = createPerson1('xiaobai');
person1.getName()

//* 2.构造函数模式
// 优点：实例可以识别为一个特定的类型
// 缺点：每次创建一个实例时，都要执行一次方法(getName)
function CreatePerson2(name) {
  this.name = name;
  this.getName = function () {
    console.log('my name is' + this.name)
  };
}

var person2 = new CreatePerson2('xiaohong')
person2.getName()

//* 2.1构造函数模式优化
// 优点：解决了每次创建实例，都要执行一次方法的问题
// 缺点：这叫啥封装
function CreatePerson3(name) {
  this.name = name;
  this.getName = getName;
}
function getName() {
  console.log('my name is' + this.name)
}

var person3 = new CreatePerson3('xiaolan')
person3.getName()

//* 3.原型模式
// 优点：方法不会重新创建
// 缺点：1，所有方法和属性都会被共享 2，不能初始化参数
function CreatePerson4() {

}
CreatePerson4.prototype.name = 'xiaolv'
CreatePerson4.prototype.getName = function() {
  console.log('my name is' + this.name)
}
var person4 = new CreatePerson4()
person4.getName()

//* 3.1 原型模式优化
// 优点：实例原型的constructor属性可以指向所属构造函数
// 缺点：同上
function CreatePerson5() {

}
CreatePerson5.prototype = {
  constructor: CreatePerson5,
  name: 'xiaohei',
  getName: function() {
    console.log('my name is' + this.name)
  }
}

var person5 = new CreatePerson5()
person5.getName()

// *4.组合模式 （构造函数模式与原型模式双剑合璧）
// 优点：该共享的共享，该私有的私有
function CreatePerson6(name) {
  this.name = name
}

CreatePerson6.prototype = {
  constructor: CreatePerson6,
  getName: function() {
    console.log('my name is' + this.name)
  }
}
var person6 = new CreatePerson6('xiaotian')
person6.getName()

//* 4.1 动态原型模式
function CreatePerson7(name) {
  this.name = name
  if (typeof this.getName !== 'function') {
    CreatePerson7.prototype.getName = function() {
      console.log('my name is' + this.name)
    }
  }
}
var person7 = new CreatePerson7('xiao7')
person7.getName()
// !注意：不能使用对象字面量重写原型
// 使用字面量的方式直接覆盖 CreatePerson8.prototype，并不会更改实例的原型的值，
// person8依然是指向了之前的原型而不是 CreatePerson8.prototype, 之前原型没有该方法

function CreatePerson8(name) {
  this.name = name;
  if (typeof this.getName !== 'function') {
    CreatePerson8.prototype = {
      constructor: CreatePerson8,
      getName: function() {
        console.log('my name is' + this.name)
      }
    }
  }
}
var person8 = new CreatePerson8('xiao8')
// person8.getName() // error: is not a function

// *5.1寄生构造函数模式
// 就是比工厂模式在创建对象的时候，多实用了一个new
// *5.2稳妥构造函数模式
// 没有公共属性
// 新创建的实例方法不使用this；
// 不使用new操作符调用构造函数



