// 简单工厂
function Factory(career) {
  function User(career, work) {
      this.career = career 
      this.work = work
  }
  let work
  switch(career) {
      case 'coder':
          work =  ['写代码', '修Bug'] 
          return new User(career, work)
          break
      case 'hr':
          work = ['招聘', '员工信息管理']
          return new User(career, work)
          break
      case 'driver':
          work = ['开车']
          return new User(career, work)
          break
      case 'boss':
          work = ['喝茶', '开会', '审批文件']
          return new User(career, work)
          break
  }
}
let coder = new Factory('coder')
console.log(coder)
let boss = new Factory('boss')
console.log(boss)