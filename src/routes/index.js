const newsRouter=require('./news')

function route(app){

    app.get('/', (req, res) => {
        res.render('home') //use HTTP Get
      })
    
      app.use('/news', newsRouter)
    
}

module.exports = route