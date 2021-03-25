class Compiler {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm;

    const fragment = this.compileFragment(this.el)

    this.compile(fragment)

    // this.el.appendChild(fragment)
  }

  compile(fragment) {
    const childNodes = Array.from(fragment.childNodes); // 类数组转为数组
    childNodes.forEach(childNode => {
      // console.dir(childNode);
      if (this.isElementNode(childNode)) {
        // 标签节点
        // console.log('element node');
        this.compileElement(childNode)
      } else if (this.isTextNode(childNode)) {
        // 内容文本节点 {{ message }} 是否与双括号
        // console.log('text node')
        this.compileText(childNode)
      }
      if (childNode.childNodes && childNode.childNodes.length) { {
        this.compile(childNode)
      }

      }
    })
  }

  compileElement(node) {
    const attributes = Array.from(node.attributes);
    attributes.forEach(attr => {
      const {name, value} = attr;
      // console.log('attr', name, value)
      // 指令 v-model  v-text v-bind  v-on:click
      const [,directive] = name.split('-')
      const [compileKey, eventName] = directive.split(':')
    })
  }

  compileText(node) {
    const content = node.textContent;
    if (/\{\{(.+)\}\}/.test(content)) {
      console.log('text', content)
    }
  }

  isDirector (name) {
    return name.startWith('v-')
  }

  compileFragment(el) {
    const f = document.createDocumentFragment();
    let firstChild;
    while(firstChild = el.firstChild) {
      f.appendChild(firstChild)
    }
    // console.dir(f); // 操作fragment不会触发页面的刷新，等后续插入时一次性更新页面
    return f;
  }

  isElementNode(el) {
    return el.nodeType === 1;
  }

  isTextNode(el) {
    return el.nodeType === 3;
  }
}

class Observer {
  constructor(data) {
    this.observe(data)
  }

  observe(data) {
    if (data && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key])
      })
    }
  }

  defineReactive(obj, key, value) {
    this.observe(value)
    Object.defineProperty(obj, key, {
      get(){
        console.log('$data get', key);
        return value;
      },
      set: (newVal) => {
        console.log('$data set', key, newVal);
        if (value === newVal) return;
        this.observe(newVal)
        value = newVal;
      }
    })
  }
}

class Vue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;

    // 触发this.$data.x 和模板的绑定
    new Observer(this.$data);

    // 处理模板部分，将模板中使用的data部分的变量和模板绑定起来
    new Compiler(this.$el, this)

    
    // 将this.$data上的数据代理到this上
    this.proxyData(this.$data);
  }

  proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        get(){
          return data[key]
        },
        set(newVal) {
          data[key] = newVal
        }
      })
    })
  }
}