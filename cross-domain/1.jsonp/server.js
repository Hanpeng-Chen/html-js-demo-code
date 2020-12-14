const express = require('express');
const app = express();

app.get('/jsonp', (req, res) => {
  let {wd, cb} = req.query;
  console.log(wd, cb);
  res.end(`${cb}('接口返回测试数据')`);
})

app.listen(3000, () => {
  console.log('app listening on port 3000');
})