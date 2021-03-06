class Parent {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}

let child = new Child("zhangsan", 25);
console.log(child.getName());
console.log(child.getAge());

console.log(Child.__proto__ === Parent); // true
console.log(Child.prototype.__proto__ === Parent.prototype); // true
