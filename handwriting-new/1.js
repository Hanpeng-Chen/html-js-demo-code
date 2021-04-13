let Parent = function(name, age) {
  this.name = name;
  this.age = age;
};
Parent.prototype.getName = function(){
  return this.name;
}
let child = new Parent('张三', 25);
console.log(child.getName());
console.log(child.age);


// 没有new关键字
let Parent = function(name, age) {
  this.name = name;
  this.age = age;
}
let child1 = Parent('张三', 25)
console.log(child1) // undefined
console.log(age) // 25
console.log(child1.name) // Cannot read property 'name' of undefined



// 构造函数中有return一个对象
function Parent(name) {
  this.name = name;
  return {age: 30}
}
let p = new Parent('张三')
console.log(p); // { age: 30 }
console.log(p.name); // undefined
console.log(p.age); // 30


function Parent(name) {
  this.name = name;
  return 'Chinese'
}
let p = new Parent('张三')
console.log(p); // Parent { name: '张三' }
console.log(p.name); // 张三
