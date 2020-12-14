const express = require('express');
const app = express();

// 设置域白名单
let whiteList = ['http://localhost:3000']

app.use(function (req, res, next) {
  console.log(req.headers);
  let origin = req.headers.origin;
  if (whiteList.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Headers', 'x-name');
  }
  next();
})

app.get('/getData', (req, res) => {
  res.end('接口返回测试数据');
})

app.use(express.static(__dirname));

app.listen(4000)