const express = require("express");
const app = express();
// app.use('/public',express.static('./public'))
// ===================================================
// app.get('/abc',(req, res) =>{
//     // console.log(req.query);
//     res.send('访问了/abc路径')
// })
// app.get('/bad/:id/:name',(req, res) =>{
//     // console.log(req.params);
//     res.send('访问了/bad路径')
// })
// app.get('/bad',(req, res) =>{
//     res.send('访问了/bad路径')
// })
// ===================================================

// =====================路由模块=============================

// const router = express.Router();
// router.get("/abc", (req, res) => {
//   res.send("访问了/abc路径");
// });
// router.get("/bad", (req, res) => {
//   res.send("访问了/bad路径");
// });
// app调用路由模块
function mw(req,res,next) {
    console.log(new Date());
    next()
}
app.use(mw)
app.use(express.static("./public"));
const userRouter= require('./router/user');
const articleRouter= require('./router/article');
app.use('/user', userRouter);
app.use('/article',articleRouter);
// =====================路由结束=============================
app.listen(3000, () => {
  console.log("服务器启动成功！");
});
