Promise.all = function(promises) {
  promises = Array.from(promises); // 将可迭代对象转换成数组
  return new Promise((resolve, reject) => {
    let index = 0;
    let result = [];
    if (promises.length === 0) {
      resolve(result);
    } else {
      function processValue(i, value) {
        result[i] = value;
        if (++index === promises.length) {
          resolve(result);
        }
      }
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then((data) => {
          processValue(i, data);
        }, (err) => {
          reject(err);
          return;
        })
      }
    }
  })
}


var promise1 = new Promise((resolve, reject) => {
  resolve(3);
})
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
console.log(values); //[3, 42, 'foo']
},(err)=>{
  console.log(err)
});

var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2)
setTimeout(function(){
  console.log('the stack is now empty');
  console.log(p2);
});