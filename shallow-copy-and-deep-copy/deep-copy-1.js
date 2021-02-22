function deepCopy(target) {
  let copyTarget = Array.isArray(target) ? [] : {};
  for (let key in target) {
    if (typeof target[key] === "object") {
      copyTarget[key] = deepCopy(target[key]);
    } else {
      copyTarget[key] = target[key];
    }
  }
  return copyTarget;
}

let obj1 = {
  a: {
    b: 1,
  },
  c: 10,
};
let obj2 = deepCopy(obj1);
obj1.a.b = 100;
obj1.c = 22

console.log(obj2);
