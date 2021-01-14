// 双向循环链表
class Node {
  constructor(el) {
    this.el = el
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor(){
    this.head = new Node('head')
    this.head.next = this.head
    this.head.prev = this.head
  }

  // 用于查找
  find(item){
    let currentNode = this.head
    while (currentNode !== null && currentNode.el !== item) {
      currentNode = currentNode.next;
    }
    return currentNode
  }

  // 插入节点
  // el:要插入的数据
  // item：数据插入到这个节点后面
  insert(el, item){
    const newNode = new Node(el)
    const cur = this.find(item)
    newNode.next = cur.next
    newNode.prev = cur
    cur.next = newNode
    cur.next.prev = newNode
  }

  // 删除节点
  remove(item){
    const node = this.find(item)
    node.prev.next = node.next
    node.next.prev = node.prev
    node.next = null
    node.prev = null
  }
}

let list = new LinkedList()
list.insert('data1', 'head')
let head = list.find('head')
console.log('head', head)
console.log('head prev', head.prev)
let result = list.find('data1')
console.log(result)