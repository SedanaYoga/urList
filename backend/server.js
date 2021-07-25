import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import listsData from './data/listsData.js'
import listRoutes from './routes/listRoutes.js'
//apply .env file
dotenv.config()
//connect to mongodb
connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
// express able to parsing json request
app.use(express.json())

// send message to localhost:5000/
app.get('/', (req, res) => {
  res.send('API is currently ACTIVE')
})

// Using Routes for ListAPI
app.use('/api/lists', listRoutes)

const PORT = 5000

app.listen(
  PORT,
  console.log(
    `Server is Running in ${process.env.NODE_ENV} mode on Port ${PORT}`
  )
)
