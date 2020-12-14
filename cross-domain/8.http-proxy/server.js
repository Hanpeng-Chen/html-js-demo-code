const express = require('express');
const app = express();

app.get('/getData', (req, res) => {
  res.end('nodejs中间件代理跨域 返回数据');
})

app.use(express.static(__dirname));

app.listen(4000)