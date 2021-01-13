class SingleLoading {
  show () {
    console.log('这是一个单例Loading')
  }
}

let loading1 = new SingleLoading()
let loading2 = new SingleLoading()
console.log(loading1 === loading2)