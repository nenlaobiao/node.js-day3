const express = require("express");

const router = express.Router();

  router.get('/list', (req, res) => {
    res.send('文章列表')
  })
  router.get('/detail', (req, res) => {
    res.send('文章详情')
  })
module.exports=router