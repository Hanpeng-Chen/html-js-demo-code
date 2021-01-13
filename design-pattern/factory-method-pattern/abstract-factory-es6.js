class Career {
  constructor(language) {
    if (new.target === Career) {
      throw new Error('抽象类不能被实例化')
    }
    this.language = language
  }
}

class JavaScriptCoder extends Career {
  constructor(careerName) {
    super('javascript')
    this.careerName = careerName
    this.work = ['用Javascript写代码', '修Bug']
  }
}

class JavaCoder extends Career {
  constructor(careerName) {
    super('java')
    this.careerName = careerName
    this.work = ['写java代码', '修Bug']
  }
}

function getAbstractCareerFactory(language) {
  switch (language) {
    case 'javascript':
      return JavaScriptCoder
      break
    case 'java':
      return JavaCoder
      break
    default:
      throw new Error('参数错误')
  }
}

let JavaScriptCoderClass = getAbstractCareerFactory('javascript')
let JavaCoderClass = getAbstractCareerFactory('java')

let javascriptCoder1 = new JavaScriptCoderClass('前端开发')
let javascriptCoder2 = new JavaScriptCoderClass('nodejs全栈开发')
console.log(javascriptCoder1)
console.log(javascriptCoder2)

let javaCoder1 = new JavaCoderClass('Java后端开发')
let javaCoder2 = new JavaCoderClass('Java大数据开发')
console.log(javaCoder1)
console.log(javaCoder2)