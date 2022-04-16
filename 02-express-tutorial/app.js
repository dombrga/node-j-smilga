const express = require('express')
const { products } = require('./data.js')
const app = express()


app.get('/', (req, res) => {
  // res.json(products)
  res.send('<h1>home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map(prod => {
    const {id, name, image} = prod
    return {id, name, image}
  })
  res.json(newProducts)
})

app.get('/api/products/:productId', (req, res) => {
  const singleProd = products.find(prod => prod.id === parseInt(req.params.productId))
  console.log('singles', singleProd)
  
  if(!singleProd) return res.status(404).send('Product does not exist.')
  return res.json(singleProd)
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
  console.log(req.params)
  res.send('this is a review')
})

app.get('/api/v1/query', (req, res) => {
  console.log(req.query)
  res.send('hello query')
})


app.listen(5000, () => {
  console.log('server is listening to port 5000...')
})