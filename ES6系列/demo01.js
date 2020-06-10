let a = 8
// let a = 9
console.log(a)

const obj = { a: "one", b: "two", a: "three" };
console.log(obj)

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

const b = {};
const c = { key: 3 }
const d = { key: 4 }
b[c] = 123;
b[d] = 456;
console.log(b[c]); // 456
/**
  * 当对象自动转换为字符串化时，它变成了[Object object]。 
  * 所以我们在这里说的是a["Object object"] = 123。 
  * 然后，我们可以尝试再次做同样的事情。 
  * c对象同样会发生隐式类型转换。那么，a["Object object"] = 456。
  */
 console.log(...[1,2,3])

//  var e = '1';
 for (var i = 0; i < 3; i++) {
   var i = '123';
   console.log(i)
 }

 for (let i = 0; i < 3; i++) {
  let i = '123';
  console.log(i)
}
// 变量提升

// function bar (x=y, y=2) {
//   return 1
// }
// bar();

var tmp = new Date();
function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
f()

// 内层变量可能覆盖外层变量
var tmp = new Date();
function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
f()
// 循环变量泄露为全局变量
var s = 'hello';
for (var i = 0;i < s.length;i++) {
    console.log(s[i])
}
console.log(i)

// var e = function _e() {};

// console.log(typeof f);
// console.log(typeof _e);
// console.log(_e);

let obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};


let { p: [x, { y }] } = obj2;
// console.log("//e -> p", p)
console.log("//e -> y", y)
console.log("x", x)

let {length} = 'ashdsadkjakld'
console.log("//e -> length", length)

// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2); // false

// 有参数的情况
let s3 = Symbol('foo');
let s4 = Symbol('foo');
console.log(s3 === s4); // false

let sym = Symbol('my symbol');
console.log(sym)
// console.log('adad' + sym) TypeError: Cannot convert a Symbol value to a string
console.log(sym.toString())
console.log(String(sym))
console.log(sym.description)

let mySymbol = Symbol();
// 第一种写法
let aa = {}
aa[mySymbol] = 'hello'
console.log("//e -> aa", aa)

// 第二种写法
let bb = {
    [mySymbol]: 'hello'
}
console.log("//e -> bb", bb)

// 第三种写法
let cc = {}
Object.defineProperty(cc, mySymbol, { value: 'hello'})
console.log("//e -> cc", cc)

console.log(cc.mySymbol) // undefined
console.log(cc[mySymbol]) // hello
console.log(cc['mySymbol']) // undefined

let fn = () => void fn()