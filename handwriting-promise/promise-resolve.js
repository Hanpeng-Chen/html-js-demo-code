Promise.resolve = function (value) {
  if (value instanceof Promise) {
    return value
  }
  return new Promise((resolve, reject) => {
    if (value && typeof value === 'object' && typeof value.then === 'function') {
      setTimeout(() => {
        value.then(resolve, reject)
      })
    } else {
      resolve(value)
    }
  })
}


// 测试代码  原生Promise执行结果：1 3 2
let p1 = Promise.resolve(1)
p1.then((res) => {
  console.log(res);
})

let p2 = Promise.resolve({
  then: function(resolve, reject) {
    resolve(2)
  }
})
p2.then((res) => {
  console.log(res);
})

let p3 = Promise.resolve(new Promise((resolve, reject) => {
  resolve(3)
}))
p3.then((res) => {
  console.log(res);
})