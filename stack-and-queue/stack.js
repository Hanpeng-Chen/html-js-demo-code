class Stack {
  constructor() {
    this.data = [];
  }

  // 入栈
  push(item) {
    this.data.push(item);
  }

  // 出栈
  pop() {
    // 如果栈为空，直接返回null
    if(this.data.length === 0) {
      return null;
    }
    return this.data.pop()
  }

  // 清空栈
  clear(){
    this.data = [];
  }
  get length(){
    return this.data.length;
  }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
console.log(stack.length)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())