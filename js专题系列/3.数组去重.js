// 数组去重

var array = ['apple', 'banana', 'watermelon', 'peach', 'litchi', 'pear', 'apple' ]

// *1.双重循环（兼容性好）
function unique(array) {
  var res = []; // 用于存储结果
  for (var i = 0, arrayLen = array.length; i < arrayLen;i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    if (j === resLen) {
      // 如果array[i]是唯一的，那么执行完循环后，j 等于 resLen
      res.push(array[i])
    }
  }
  return res
}
console.log(unique(array))

// *2.indexOf
function unique2(array) {
  var res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    if (res.indexOf(array[i]) === -1) {
      res.push(array[i])
    }
  }
  return res;
}
console.log(unique2(array))

// *3.排序后去重
// * concat 的作用就是为了复制一份原数组，不会影响到原数组
function unique3(array) {
  var res = []
  var sortArray = array.concat().sort();
  var compareValue;
  for (var i = 0, len = sortArray.length; i < len; i++) {
    if (!i || compareValue !== sortArray[i]) {
      res.push(sortArray[i]);
    }
    compareValue = sortArray[i]
  }
  return res
}

console.log(unique3(array))

//* unique API 根据传入的参数，是否进行排序来分别采用indexOf去重或者排序后去重

// !20200610-暂时跳过
// !后续这个iteratee 参数（传入一个函数，可以对每个函数进行重新计算，然后根据结果进行去重）

//* 4.filter去重
// indexOf
function unique4(array) {
  let res = []
  res = array.filter(function(item, index) {
    return array.indexOf(item) === index;
  })
  return res
}
console.log(unique4(array))

// sort
function unique5(array) {
  var res = array.concat().sort().filter(function(item, index, array) {
    // 这里的array 指的是参数array 调用了 filter 的数组本身。
    return !index || (item !== array[index - 1]);
  })
  return res
}
console.log(unique5(array))

//* 5.object键值对
//! 跳过

//* 6.ES6 Set，Map
// Set
function unique6(array) {
  var res = Array.from(new Set(array));
  return res;
}

var unique7 = () => [...new Set(array)];

console.log(unique6(array))
console.log(unique7(array))

// Map
function unique8(array) {
  var res = new Map()
  return array.filter(function(item, index) {
    return !res.has(item) && res.set(item, 1)
  })
}
console.log(unique8(array))

setTimeout(() => {
  console.log(1)
})

new Promise((resolve, reject) => {
    console.log(2)
    resolve(3)
}).then((val) => {
    console.log(val)
})
console.log(4)
