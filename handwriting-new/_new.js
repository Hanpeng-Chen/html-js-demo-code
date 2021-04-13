function _new(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw 'ctor must be a function';
  }
  let newObj = new Object();
  newObj.__proto__ = Object.create(ctor.prototype);
  let res = ctor.apply(newObj, [...args]);

  let isObject = typeof res === 'object' && res !== null;
  let isFunction = typeof res === 'function';
  return isObject || isFunction ? res : newObj;
}



// 测试
// let Parent = function(name, age) {
//   this.name = name;
//   this.age = age;
// };
// Parent.prototype.getName = function(){
//   return this.name;
// }
// let p = _new(Parent, 'zhangsan', 25);
// console.log(p); // Parent { name: 'zhangsan', age: 25 }
// console.log(p.age); // 25 
// console.log(p.getName()); // zhangsan


// function Parent1(name) {
//   this.name = name;
//   return {age: 30}
// }
// let p1 = _new(Parent1, 'lisi')
// console.log(p1); // { age: 30 }
// console.log(p1.name); // undefined
// console.log(p1.age); // 30


function Parent2(name) {
  this.name = name;
  return 'Chinese'
}
let p2 = _new(Parent2, 'wangwu')
console.log(p2); // Parent { name: 'wangwu' }
console.log(p2.name); // wangwu