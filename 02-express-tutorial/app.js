const express = require('express')
const app = express()
let { people } = require('./data.js')


app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({sucess: true, data: people})
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if(name) {
    people.push({
      id: people.length + 1,
      name
    })
    console.log(people)
    return res.status(200).send({
      id: people.length + 1,
      person: name
    })
  }
  res.send('people heres')
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if(name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('give a name')
})

app.listen(5000, () => {
  console.log('server is listening to port 5000...')
})