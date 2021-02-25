let parent = {
  name: "parent",
  interest: ["eat", "run"],
  getName: function () {
    return this.name;
  },
};

function clone(original) {
  let clone = Object.create(original);
  clone.getInterest = function () {
    return this.interest;
  };
  return clone;
}

let parent1 = clone(parent);
console.log(parent1.getName());
console.log(parent1.getInterest());
