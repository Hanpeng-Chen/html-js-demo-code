class Queue {
  constructor () {
    this.data = [];
  }
  // 入栈
  enqueue(item) {
    this.data.push(item)
  }
  // 出栈
  dequeue() {
    if (this.data.length === 0) {
      return null
    }
    return this.data.shift()
  }
  clear(){
    this.data = []
  }
  get length(){
    return this.data.length
  }
}

let queue = new Queue()
queue.enqueue('A')
queue.enqueue('B')
console.log(`第一次出栈:${queue.dequeue()}`)
console.log(`栈的元素个数：${queue.length}`)
console.log(`第二次出栈：${queue.dequeue()}`)
console.log(`第三次出栈：${queue.dequeue()}`)