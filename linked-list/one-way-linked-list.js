// 单向链表

// 节点
class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = new Node('head')
  }

  // 用于查找
  find(item){
    let currentNode = this.head
    while (currentNode !== null && currentNode.el !== item) {
      currentNode = currentNode.next;
    }
    return currentNode
  }

  findPre(item) {
    let cur = this.head
    while (cur.next !== null && cur.next.el !== item) {
      cur = cur.next
    }
    return cur
  }

  // 插入节点
  // el:要插入的数据
  // item：数据插入到这个节点后面
  insert(el, item){
    const newNode = new Node(el)
    const cur = this.find(item)
    newNode.next = cur.next
    cur.next = newNode
  }

  // 删除节点
  remove(item){
    const preNode = this.findPre(item)
    if (preNode.next !== null) {
      preNode.next = preNode.next.next
    }
  }
}

let list = new LinkedList()
list.insert('data1', 'head')
list.insert('data2', 'data1')
list.insert('data3', 'data2')
console.log(list)

const result = list.find('data1')
console.log(result)

list.remove('data1')
console.log(list)