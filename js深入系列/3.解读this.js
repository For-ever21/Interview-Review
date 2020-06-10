// 解读this

// *ECMAScript的类型分为语言类型和规范类型
// *规范类型就是用来描述语言底层行为的逻辑

// *正常情况下，谁调用指向谁
// *箭头函数声明时确定，指向外层作用域对象
// *然后就是严格模式

// *base value 就是属性所在的对象或者就是 EnvironmentRecord，
// *它的值只可能是 undefined, an Object, a Boolean, a String, a Number, or an environment record 其中的一种。
// *所以函数下的this值为ImplicitThisValue ，始终返回undefined，然后就会隐式转换为window对象
var name = 'window';
var person = {
    name: 'person',
}
var doSth = function(){
    console.log(this.name);
    return function(){
        console.log(this.name);
    }
}
var Student = {
    name: '小王',
    doSth: doSth,
}
doSth();
Student.doSth();
Student.doSth.call(person);
// new Student.doSth.call(person);
for(let i = (setTimeout(()=>console.log(i), 3) , 0); i < 2; i++) { }

console.log(1 + "2" + "2"); 
console.log(1 + +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

var myObject = {
  foo: "bar",
  func: function() {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo); // bar
      console.log("outer func:  self.foo = " + self.foo); // bar
      (function() {
          console.log(this); // undefined 隐式转换为window对象
          console.log("inner func:  this.foo = " + this.foo); // undefined
          console.log("inner func:  self.foo = " + self.foo); // bar
      }());
  }
};
myObject.func();

var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}
let flag = true
//示例1
console.log(foo.bar());
//示例2
console.log((flag ? foo.bar : null)());
//示例3
console.log((foo.bar = foo.bar)());
//示例4
console.log((false || foo.bar)());
//示例5
console.log((foo.bar, foo.bar)());