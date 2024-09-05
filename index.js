const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login' ,(re,res)=>{
    res.send('<h1> test</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})