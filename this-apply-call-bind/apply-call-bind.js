let dog = {
  name: 'dog',
  getDetail: function (count) {
    return `${this.name} has ${count} legs`
  }
}

let bird = {
  name: 'bird'
}
let frog = {
  name: 'frog'
}

console.log(dog.getDetail(4)); // dog has 4 legs
console.log(dog.getDetail.apply(bird, [2])); // bird has 2 legs
console.log(dog.getDetail.call(frog, 3)); // frog has 3 legs
let bird1 = dog.getDetail.bind(bird);
console.log(bird1(2)); // bird has 2 legs