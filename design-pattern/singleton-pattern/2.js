// 静态方法的实现
class SingleLoading {
  show () {
    console.log('这是一个单例Loading')
  }
  static getInstance(){
    if (!SingleLoading.instance) {
      SingleLoading.instance = new SingleLoading()
    }
    return SingleLoading.instance
  }
}
const loading1 = SingleLoading.getInstance()
const loading2 = SingleLoading.getInstance()
console.log(loading1 === loading2) // true


// 闭包
class SingleLoading {
  show () {
    console.log('这是一个单例Loading')
  }
}
SingleLoading.getInstance = (function(){
  // 定义自由变量instance，模拟私有变量
  let instance = null

  return function(){
    if(!instance) {
       // 如果为null则new出唯一实例
      instance = new SingleLoading()
    }
    return instance
  }
})();
const loading3 = new SingleLoading().getInstance()
const loading4 = new SingleLoading().getInstance()
console.log(loading3 === loading4)