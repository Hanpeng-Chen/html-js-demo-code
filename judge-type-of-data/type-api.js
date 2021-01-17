
function isType(value, type) {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}
console.log(isType('111', 'String')) // true
console.log(isType(null, 'Null')) // true