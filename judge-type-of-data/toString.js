console.log(Object.prototype.toString.call(''))   // [object String]
console.log(Object.prototype.toString.call(1))    // [object Number]
console.log(Object.prototype.toString.call(true)) // [object Boolean]
console.log(Object.prototype.toString.call(Symbol())) //[object Symbol]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(new Function())) // [object Function]
console.log(Object.prototype.toString.call(new Date())) // [object Date]
console.log(Object.prototype.toString.call([])) // [object Array]
console.log(Object.prototype.toString.call(new RegExp())) // [object RegExp]
console.log(Object.prototype.toString.call(new Error())) // [object Error]
console.log(Object.prototype.toString.call({})) // [object Object]
console.log(Object.prototype.toString.call(Math)) // [object Math]
console.log(Object.prototype.toString.call(JSON)) // [object JSON]

function a () {
  console.log(Object.prototype.toString.call(arguments)) // [object Arguments]
}
a()