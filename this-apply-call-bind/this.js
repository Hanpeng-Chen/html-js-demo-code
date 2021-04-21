// 直接函数调用，this指向全局环境
var name = "global name";
function getName() {
  var name = "function name";
  console.log("in function", this);
  console.log(this.name);
}
getName();
console.log("out function", this);

// 对象函数调用，this指向调用函数的对象本身
var name = "global name";
var obj = {
  name: "object name",
  getName: function () {
    console.log(this);
    console.log(this.name);
  }
};
obj.getName();

// -------------------------------
var name = "global name";
function getName() {
  console.log(this.name);
}
var obj = {
  name: "object name"
};
obj.getName = getName;
obj.getName(); // object name
getName(); // global name


// 构造函数调用
function NewObject(name) {
  this.name = name;
  console.log(this.name)
}
var obj = new NewObject('obj')



// 箭头函数
function foo() {
  return () => {
      return () => {
          console.log(this.a);  
      };  
  };
}
var a = 2;
console.log(foo()()()); // 2


// _this = this
var name = 'global name'
var obj = {
  name: 'obj name',
  fn1: function () {
    console.log(this.name);
  },
  fn2: function () {
    var _this = this
    setTimeout(function() {
      _this.fn1()
    }, 1000)
  }
}
obj.fn2() // obj name
