// Array.of 用于将参数依次转化为数组中的一项，然后返回这个新数组，而不管这个参数是数字还是其他。
console.log(Array.of(8.0));
console.log(Array.of('8', 5));
console.log(Array(8));
console.log(Array(8, 5));
console.log(Array('8'));


// Array.from
let obj = {0: 'a', 1: 'b', 2: 'c', length: 3}
let arr1 = Array.from(obj, function(value, index) {
  return value.repeat(2)
}, obj)
console.log(arr1)
let arr2 = Array.from(obj, (value, index) => value.repeat(2))
console.log(arr2);

let array= [{name:'zz'}, 123, 1, 123, "abc", new Date()];
let str = array.toString()
let str1 = array.toLocaleString()
console.log(str, str1)
console.log(array.lastIndexOf(123))