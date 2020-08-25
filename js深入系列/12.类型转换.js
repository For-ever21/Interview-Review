// ? js数据类型
// *基础类型：Undefined,Null,String,Boolean,Number,Symbol(ES6)
// * 复杂类型（对象）: Object

// ? 隐式转换
// *1, 将值转为原始值，ToPrimitive()
// *2, 将值转为数字，ToNumber()
// *3, 将值转为字符串，ToSrting()

// ? ToPrimitive(input, PreferredType)
// *input 是要转换的值，PreferredType 是要转换的类型，  转换后的结果不一定是这个参数所指的这个类型，但一定是原始值或者报错

// ? 如果PreferredType被标记为Number
// 流程：
//   *1，如果是一个原始值，则直接返回它
//   *2，如果不是，就使用ValueOf，如果返回的是原始值，不变；
//   *3，如果不是，就调用toString（），如果返回的是原始值，不变；
//   *4，都不是，则抛出TypeError异常

// ? 如果PreferredType被标记为String
// 流程：
  // *把上一个流程的，第2步和第3步换个顺序

// ? 如果 PreferredType 没设置，
// * 该对象为 Date 类型，则 PreferredType 被设置为String
// * 其他的都设置为 String

// ! 原始值转数字和原始值转字符串，纸质笔记本有记录

console.log(Number(null)) // +0

var a = 0;
var b = '1';
if (a == b) {

} else {
  console.log(a, b)
}
console.log(false.toString())
console.log([23].toString())
console.log([] == {})
console.log({a: 1}.toString())
console.log({}.toString())
console.log({}.valueOf())
console.log({a: 1}.valueOf())
console.log('42' === [42])
console.log([] == !{})