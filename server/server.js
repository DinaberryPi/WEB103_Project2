import express from 'express'

import fruitsRouter from './routes/fruits.js'


const app = express()
//就将该请求映射到 ./public 目录中，尝试查找相应的静态文件，并将文件内容作为响应返回给客户端。
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

//这意味着 /gifts 下的所有路由都将由这个 giftsRouter 处理。这有助于将路由逻辑分组并使代码更有组织性。
app.use('/fruits', fruitsRouter)
//home page
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Fruit Notebook</h1>')
})

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
