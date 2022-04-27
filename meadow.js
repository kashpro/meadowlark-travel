const express = require('express')

const app = express()
const port = process.env.PORT || 3000

//root page
app.get('/', (req, res) => {
  res.type('text/plain')
  res.send('Meadow Travel')
})

//about page
app.get('/about', (req, res) => {
  res.type('text/plain')
  res.send('about Meadow Travel')
})


//404 page
app.use( (req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not found')
} )

//500 page
app.use( (err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Internal Server Error')
} )

app.listen(port, () => {
  console.log(`Server is running on port ${port}. Press CTRL+C to stop the server.`)
})