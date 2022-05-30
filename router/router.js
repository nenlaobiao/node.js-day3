const express = require("express");

const router = express.Router();
router.get('/user/list', (req, res) => {
    res.send('用户列表')
  })
  router.get('/user/detail', (req, res) => {
    res.send('用户详情')
  })
  router.get('/article/list', (req, res) => {
    res.send('文章列表')
  })
  router.get('/article/detail', (req, res) => {
    res.send('文章详情')
  })
module.exports=router