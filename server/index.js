require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const dataRoute = require('./Routes/Route')


// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-with,Content-Type,Accept"
    );
  console.log(req.path, req.method)
  next();
})

// routes
app.use('/api/data', dataRoute)

// connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 