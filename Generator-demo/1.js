function* gen() {
  console.log('enter generator function')
  let a = yield 1;
  let b = yield (function(){return 2})();
  return 3;
}

let g = gen() // 阻塞住，不会执行任何语句
console.log(g.next()) // { value: 1, done: false }
console.log(g.next()) // { value: 2, done: false }
console.log(g.next()) // { value: 3, done: true }
console.log(g.next()) // { value: undefined, done: true }