function Parent() {
  this.name = "parent";
  this.interest = ["eat"];
}

function Child() {
  this.type = "child";
}

Child.prototype = new Parent();
let child = new Child();
console.log(child.name, child.type);

let child1 = new Child();
child1.interest.push("run");
console.log(child.interest, child1.interest);
