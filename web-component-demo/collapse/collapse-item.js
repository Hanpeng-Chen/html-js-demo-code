class CollapseItem extends HTMLElement {
  constructor(){
    super()
    const shadow = this.attachShadow({mode: 'open'})
    const tmpl = document.getElementById('myCollapseItemTemplate')
    const cloneTmpl = tmpl.content.cloneNode(true)
    this.show = true

    const style = document.createElement('style')
    style.textContent = `
      :host {
        display: flex;
        flex-direction: column;
        border-top: 1px solid #E4E7ED;
      }
      .title {
        height: 44px;
        line-height: 44px;
        color: #303133;
      }
      .content {
        font-size: 14px;
        color: #606266;
        padding-top: 5px;
        padding-bottom: 20px;
      }
    `

    shadow.appendChild(style)
    shadow.appendChild(cloneTmpl)

    this.titleEle = shadow.querySelector('.title')
    this.titleEle.addEventListener('click', ()=> {
      let nameVal = this.getAttribute('name')
      this.show = !this.show
      document.querySelector('my-collapse').dispatchEvent(new CustomEvent('change', {
        detail: {
          name: nameVal,
          show: this.show
        }
      }))
    })
  }
  static get observedAttributes(){
    return ['active', 'title', 'name']
  }
  // 组件属性变化时
  attributeChangedCallback(key, oldVal, newVal) {
    switch (key) {
      case 'active':
        this.activeList = JSON.parse(newVal)
        break;
      case 'title':
        this.titleEle.innerHTML = newVal;
        break
      case 'name':
        this.name = newVal
        break
    }
    let name = this.name
    if (this.activeList && name) {
      let isShow = this.activeList.includes(name)
      this.shadowRoot.querySelector('.content').style.display = isShow ? 'block' : 'none'
      this.show = isShow
    }
  }
}

export default CollapseItem