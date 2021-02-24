let parent = {
  name: "parent",
  interest: ["eat"],
  getName: function () {
    return this.name;
  },
};

let parent1 = Object.create(parent);
parent1.name = "parent1";
parent1.interest.push("sleep");

let parent2 = Object.create(parent);
parent2.interest.push("run");

console.log(parent1.name); // parent1
console.log(parent1.name === parent1.getName()); // true
console.log(parent1.interest); // [ 'eat', 'sleep', 'run' ]
console.log(parent2.name); // parent
console.log(parent2.name === parent2.getName()); // true
console.log(parent2.interest); // [ 'eat', 'sleep', 'run' ]
