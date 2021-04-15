console.log('00000000000000')

const ul = document.querySelector('ul');
async function getList() {
  let res = await fetch('/api/list')
  let data = await res.json();
  let str = ''
  data.forEach(element => {
    str += `<li><img src="${element}" /></li>`
  });
  ul.innerHTML = str
}
getList()