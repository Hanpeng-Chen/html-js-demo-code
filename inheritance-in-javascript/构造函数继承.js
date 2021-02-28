function Parent(name) {
  this.name = name;
  this.interest = ["eat"];
}
Parent.prototype.getName = function () {
  return this.name;
};

function Child(name) {
  Parent.call(this, name);
  this.type = "child";
}

let child1 = new Child('child1');
child1.interest.push("run");
console.log(child1.interest); // [ 'eat', 'run' ]
let child2 = new Child('child2');
console.log(child2.interest); // [ 'eat' ]

console.log(child1.getName()); // 报错
