import Collapse from './collapse.js'
import CollapseItem from './collapse-item.js'

window.customElements.define('my-collapse', Collapse)
window.customElements.define('my-collapse-item', CollapseItem)

// 设置默认展开那几个
let defaultActive = ['1', '2']

document.querySelector('my-collapse').setAttribute('active', JSON.stringify(defaultActive))

// 每个item获取defaultActive和自己的name作比较

document.querySelector('my-collapse').addEventListener('change', (e)=> {
  let {name, show} = e.detail
  if (show) {
    defaultActive.push(name)
  } else {
    let index = defaultActive.indexOf(name)
    defaultActive.splice(index, 1)
  }
  document.querySelector('my-collapse').setAttribute('active', JSON.stringify(defaultActive))
})