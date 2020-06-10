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