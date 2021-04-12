function* gen() {
  let a = yield 1111;
  console.log('a', a)
  let b = yield 2222;
  console.log('b', b)
  let c = yield 3333;
  console.log('c', c)
  let d = yield 4444;
  console.log('d', d);
}
let g = gen()
g.next(1)   //第一次调用next函数时，传递的参数无效，故无打印结果
g.next(2)  // a 2
g.next(3)  // b 3
g.next(4)  // c 4
g.next(5)  // d 5



function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
let a = hw.next()
console.log(a)
a = hw.next()
console.log(a)
a = hw.next()
console.log(a)
a = hw.next()
console.log(a)