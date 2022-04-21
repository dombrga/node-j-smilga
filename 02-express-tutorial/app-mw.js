const express = require('express')
const morgan = require('morgan')
const app = express()
const { logger } = require('./logger.js')
const authorize = require('./authorize.js')

// req => middleware => res

app.use(morgan('tiny'))
// app.use([logger, authorize])
// app.use(express.static('./public'))
// app.use(logger)

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('products')
})
app.get('/items', (req, res) => {
  res.send('items')
})

app.listen(5000, () => {
  console.log('server is listening to port 5000...')
})