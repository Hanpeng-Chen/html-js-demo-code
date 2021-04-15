const express = require('express')
const fs = require('fs')
const path = require('path')
const imgList = require('./data.json')

const app = express()
app.use(express.static(path.join(__dirname)))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/list', (req, res) => {
  let start = Math.floor(Math.random() * (imgList.length - 5))
  res.json(imgList.slice(start, start + 10))
})


app.listen(3000, () => {
  console.log('PWA server port: 3000')
})