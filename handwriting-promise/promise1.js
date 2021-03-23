const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";


function Promise(executor) {
  let self = this;
  self.status = PENDING;
  self.data = undefined; // Promise的值
  self.onResolvedCallback = []; // Promise resolve时的回调函数
  self.onRejectedCallback = []; // Promise rejected的回调函数集

  function resolve(value) {
    if (self.status === PENDING) {
      self.status = FULFILLED;
      self.data = value;
      for(let i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }
  function reject(reason) {
    if (self.status === PENDING) {
      self.status = REJECTED;
      self.data = reason;
      for(let i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason);
      }
    }
  }

  try {
    executor(resolve, reject)
  } catch(e) {
    reject(e)
  }
}


Promise.prototype.then = function(onFulfilled, onRejected) {
  let self = this;
  let promise2;

  // 根据规范，如果then的参数不是function，则需要忽略它
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

  if (self.status === FULFILLED) {
    // 如果promise状态确定为fulfilled，调用onFulFilled，但代码执行中可能会抛出，所以将其包裹在try/catch代码块中
    return promise2 = new Promise(function(resolve, reject) {
      try {
        let x = onFulfilled(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
        resolve(x)
      } catch(e) {
        reject(e)
      }
    })
  }
  if (self.status === REJECTED) {
    return promise2 = new Promise(function(resolve, reject) {
      try {
        let x = onRejected(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
      } catch(e) {
        reject(e)
      }
    })
  }
  if (self.status === PENDING) {
    return promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          let x = onFulfilled(self.data);
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch(e) {
          reject(e)
        }
      })
      self.onRejectedCallback.push(function(reason) {
        try {
          let x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch(e) {
          reject(e)
        }
      })
    })
  }
}