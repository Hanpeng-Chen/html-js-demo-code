Function.prototype.apply = function (context, args) {
  if (context === null || context === undefined) {
    context = window;
  } else {
    context = Object(context); // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
  }
  context.fn = this;
  let result = eval("context.fn(...args)");
  delete context.fn;
  return result;
};

// Function.prototype.apply = function (context, args) {
//   if (context === null || context === undefined) {
//     context = window;
//   } else {
//     context = Object(context); // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
//   }
//   let fn = Symbol(context);
//   context[fn] = this;
//   let result = context[fn](...args);
//   delete context[fn];
//   return result;
// };


Function.prototype.call = function(context, ...args) {
  if (context === null || context === undefined) {
    context = window
  } else {
    context = Object(context)
  }
  context.fn = this;
  let result = eval('context.fn(...args)');
  delete context.fn;
  return result;
}


Function.prototype.bind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('this must be a function')
  }
  var self = this;
  var fbound = function() {
    return self.call(this instanceof fbound ? this : Object(context), ...args, ...arguments);
    // return self.call(this instanceof fbound ? this : Object(context), args.concat(Array.prototype.slice.call(arguments)))
  }
  if (this.prototype) {
    fbound.prototype = Object.create(this.prototype);
  }
  return fbound;
}


// test
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

// console.log(dog.getDetail(4)); // dog has 4 legs
// console.log(dog.getDetail.apply(bird, [2])); // bird has 2 legs
// console.log(dog.getDetail.call(frog, 3)); // frog has 3 legs
let bird1 = dog.getDetail.bind(bird);
console.log(bird1(2)); // bird has 2 legs