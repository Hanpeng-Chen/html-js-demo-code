function Parent() {
  this.name = "parent";
  this.interest = ["eat"];
}
Parent.prototype.getName = function () {
  return this.name;
};

function Child() {
  Parent.call(this);
  this.type = "child";
}

let child1 = new Child();
child1.interest.push("run");
console.log(child1.interest); // [ 'eat', 'run' ]
let child2 = new Child();
console.log(child2.interest); // [ 'eat' ]

console.log(child1.getName()); // 报错
