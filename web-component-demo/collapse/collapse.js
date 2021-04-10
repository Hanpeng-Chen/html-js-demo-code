class Collapse extends HTMLElement {
  constructor(){
    super()

    const shadow = this.attachShadow({mode: 'open'})
    const tmpl = document.getElementById('myCollapseTemplate')
    const cloneTmpl = tmpl.content.cloneNode(true)

    const style = document.createElement('style')
    style.textContent = `
      :host {
        display: flex;
        border: 1px solid #DCDFE6;
        padding: 10px;
      }
      .my-collapse {
        flex: 1;
      }
    `

    shadow.appendChild(style)
    shadow.appendChild(cloneTmpl)

    let slot = shadow.querySelector('slot')
    slot.addEventListener('slotchange', (e)=> {
      this.slotList = e.target.assignedElements()
      this.render()
    })
  }

  // 监控属性的变化
  static get observedAttributes(){
    return ['active']
  }
  connectedCallback(){
    console.log('插入到DOM时执行的回调')
  }
  disconnectedCallback(){
    console.log('移除时执行的回调')
  }
  adoptedCallback(){
    console.log('将组件移动到iframe时的回调')
  }
  // 组件属性变化时
  attributeChangedCallback(key, oldVal, newVal) {
    // console.log('组件属性变化时')
    if (key === 'active') {
      this.activeList = JSON.parse(newVal)
      this.render()
    }
  }
  render(){
    if (this.slotList && this.activeList) {
      // console.log(this.slotList, this.activeList);
      [...this.slotList].forEach(child=> {
        child.setAttribute('active', JSON.stringify(this.activeList))
      })
    }
  }
}

export default Collapse