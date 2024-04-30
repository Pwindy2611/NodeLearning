const express = require('express') //Import express framework
const morgan = require('morgan') //Import morgan framework middleware
const handlebars = require('express-handlebars') //Import handelBars
const app = express() //object builder for express
const port = 3000 //Run in port 3000
const path = require('path')

//HTTP logger
app.use(morgan('combined'))
//Template engine and trade syntax .hbs
app.engine('hbs', handlebars.engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
//__dirname : C:\Users\Admin\NodeLearning\src
app.set('views',path.join(__dirname, 'resources/views'))
//Route default "/"
app.get('/', (req, res) => {
  res.render('home') //use HTTP Get
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})