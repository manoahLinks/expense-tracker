require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      dbConnect = require('./models'),
      appRoutes = require('./routes/expense')

app = express()

// to help us log all request type to the console
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

// defining my routes
app.use('/api/expense', appRoutes)


// setting up server
app.listen(process.env.PORT, () => {
    console.log("expense app loading on port: " + process.env.PORT)
})