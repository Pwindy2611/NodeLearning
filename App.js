const express = require('express') //Import express framework for fist request
const app = express() //object builder for express
const port = 3000 //Run in port 3000

//Route default "/"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})