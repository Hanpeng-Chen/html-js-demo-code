let CareerAbstractFactory = function(subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if (typeof CareerAbstractFactory[superType] === 'function') {
    // 缓存类
    function F() {}
    // 继承父类属性和方法
    F.prototype = new CareerAbstractFactory[superType]()
    // 将子类的constructor指向父类
    subType.constructor = subType;
    // 子类原型继承父类
    subType.prototype = new F()
  } else {
    throw new Error('抽象类不存在')
  }
}

// JavaScript开发者抽象类
CareerAbstractFactory.JavaScriptCoder = function (){
  this.language = 'javascript'
}
CareerAbstractFactory.JavaScriptCoder.prototype = {
  getCareerName: function(){
    return new Error('抽象方法不能调用')
  }
}

// Java开发者抽象类
CareerAbstractFactory.JavaCoder = function(){
  this.language = 'java'
}
CareerAbstractFactory.JavaCoder.prototype = {
  getCareerName: function(){
    return new Error('抽象方法不能调用')
  }
}

// JavaScriptCoder的子类
function CoderOfJavaScript (careerName) {
  this.careerName = careerName
  this.work = ['写代码', '修Bug']
}
// 抽象工厂实现JavaScriptCoder类的继承
CareerAbstractFactory(CoderOfJavaScript, 'JavaScriptCoder')
// 重写抽象方法
CoderOfJavaScript.prototype.getCareerName = function (){
  return this.careerName;
}


function CoderOfJava (careerName) {
  this.careerName = careerName
  this.work = ['写代码', '修Bug']
}
// 抽象工厂实现JavaScriptCoder类的继承
CareerAbstractFactory(CoderOfJava, 'JavaCoder')
// 重写抽象方法
CoderOfJava.prototype.getCareerName = function (){
  return this.careerName;
}

let javaCode1 = new CoderOfJava('Java后端开发')
console.log(javaCode1.getCareerName(), javaCode1.language)
let javaCode2 = new CoderOfJava('Java大数据开发')
console.log(javaCode2.getCareerName(), javaCode2.language)

let javascriptCoder1 = new CoderOfJavaScript('前端开发')
console.log(javascriptCoder1.getCareerName(), javascriptCoder1.language);
let nodejsCoder = new CoderOfJavaScript('node全栈开发')
console.log(nodejsCoder.getCareerName(), nodejsCoder.language)