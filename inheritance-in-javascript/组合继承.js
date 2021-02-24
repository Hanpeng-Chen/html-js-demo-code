function Parent() {
  this.name = "parent";
  this.interest = ["eat"];
}

Parent.prototype.getName = function () {
  return this.name;
};

function Child() {
  Parent.call(this);
  this.type = "child type";
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

let child1 = new Child();
let child2 = new Child();

child1.interest.push("run");
console.log(child1.interest, child2.interest); // [ 'eat', 'run' ] [ 'eat' ]
console.log(child1.getName()); // parent
console.log(child2.getName()); // parent
