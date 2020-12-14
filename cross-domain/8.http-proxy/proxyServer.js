const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// 利用 Express 托管静态文件，可通过http://localhost:3000/index.html来访问index.html，实现跨域
app.use(express.static(__dirname));

// 代理服务器操作
// 设置允许跨域访问该服务
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// http-proxy-middleware
// 中间件 每个请求来之后 都会转发到 http://localhost:3001 后端服务器
app.use('/', createProxyMiddleware({target: 'http://localhost:4000', changeOrigin: true}))

app.listen(3000)