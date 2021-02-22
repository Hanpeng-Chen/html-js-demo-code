function deepCopy(obj, hash = new WeakMap()) {
  // 日期对象直接返回一个新的日期对象
  if (obj.constructor === Date) return new Date(obj);
  // 如果是正则对象直接返回一个新的正则对象
  if (obj.constructor === RegExp) return new RegExp(obj);
  // 如果循环引用了就用WeakMap来解决
  if (hash.has(obj)) return hash.get(obj);

  // 遍历传入参数所有键的特性
  let allDesc = Object.getOwnPropertyDescriptor(obj);
  // 继承原型链
  let copyObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, copyObj)
  for (let key of Reflect.ownKeys(obj)) {
    copyObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepCopy(obj[key], hash) : obj[key]
  }
  return copyObj
}


function isComplexDataType(obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}


// 下面是验证代码
let obj = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: '我是一个对象', id: 1 },
  arr: [0, 1, 2],
  func: function () { console.log('我是一个函数') },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  [Symbol('1')]: 1,
};
Object.defineProperty(obj, 'innumerable', {
  enumerable: false, value: '不可枚举属性' }
);
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj    // 设置loop成循环引用的属性
let cloneObj = deepCopy(obj)
cloneObj.arr.push(4)
console.log('obj', obj)
console.log('cloneObj', cloneObj)