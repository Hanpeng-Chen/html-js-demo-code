const shallowCopy = (target) => {
  if (typeof target === "object" && target !== null) {
    const copyTarget = Array.isArray(target) ? [] : {};
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        copyTarget[key] = target[key];
      }
    }
    return copyTarget;
  } else {
    return target;
  }
};

let obj = [1, 2, 3, 4, { a: 1 }];
let newObj = shallowCopy(obj);
console.log(newObj);

newObj[0] = 0;
newObj[4].a = 10;
console.log(obj);
console.log(newObj);
