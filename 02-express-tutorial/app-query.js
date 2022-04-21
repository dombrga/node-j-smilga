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
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if(search) {
    sortedProducts = sortedProducts.filter(prod => {
      return prod.name.startsWith(search)
    })
  }

  if(limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if(sortedProducts.length < 1) { 
    // return res.status(200).send('no products matched the search')
    return res.status(200).json({success: true, data: []})
  }

  res.status(200).json(sortedProducts)
})


app.listen(5000, () => {
  console.log('server is listening to port 5000...')
})