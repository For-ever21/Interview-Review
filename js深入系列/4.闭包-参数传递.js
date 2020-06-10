// 闭包

// *闭包是那些能够自由访问变量的函数

// ?参数按值传递
// *ECMAScript中所有函数的参数都是按值传递的

// ?什么是按值传递呢
// *函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样

// ?什么是引用传递呢
// *就是传递对象的引用，函数内部对参数的任何改变都会影响该对象的值，
// *因为两种引用的是同一个对象
// *参数如果是基本类型是按值传递，如果是引用类型按共享传递。


// if(function a(){}){
//     console.log(a)
//    }

   let arr = [{value: 1}, {value: 2},{value: 3}];
   console.log(`${arr.map(res=>`我是:${res.value}`)}`)

   var obj = {
        value: 1
    };
    function foo1(o) {
        o = 2;
        console.log(o);
    }
    foo1(obj);
    console.log(obj.value)
    function foo(o) {
        o = 2;
        console.log(o);
    }
    foo(obj.value);
    console.log(obj.value)