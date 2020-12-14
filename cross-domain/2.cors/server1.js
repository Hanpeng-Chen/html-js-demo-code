const express = require('express');
const app = express();

// 利用 Express 托管静态文件，可通过http://localhost:3000/index.html来访问index.html，实现跨域
app.use(express.static(__dirname));

app.listen(3000)