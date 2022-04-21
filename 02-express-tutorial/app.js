const express = require('express')
const app = express()
let { people } = require('./data.js')


app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
// app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({sucess: true, data: people})
})

app.post('/api/people', (req, res) => {
  
})

app.post('/login', (req, res) => {
  console.log(req.body)
  res.send('posted')
})

app.listen(5000, () => {
  console.log('server is listening to port 5000...')
})