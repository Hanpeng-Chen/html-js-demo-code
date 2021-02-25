function clone(parent, child) {
  // 改用Object.create可以减少组合继承中多进行一次构造函数
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Parent() {
  this.name = "parent";
  this.interest = ["eat", "run"];
}

Parent.prototype.getName = function () {
  return this.name;
};

function Child() {
  Parent.call(this);
  this.type = "child type";
}

clone(Parent, Child);

Child.prototype.getInterest = function () {
  return this.interest;
};

let child1 = new Child();
let child2 = new Child();

child1.interest.push("sleep");
console.log(child1.getName()); // parent
console.log(child1.getInterest()); // [ 'eat', 'run', 'sleep' ]
console.log(child2.getName()); // parent
console.log(child2.getInterest()); // [ 'eat', 'run' ]