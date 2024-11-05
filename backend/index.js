import express from "express"
import { PORT } from "./config.js"
import mongoose from "mongoose"
import { Product } from "./models/productModel.js"
import productRoute from './routes/productsRoute.js'

const app = express()

// middleware for parsing request body
app.use(express.json())

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Hello World')
})

app.use('/products', productRoute)

// database connection
mongoose
    .connect('mongodb://localhost:27017/product-list')
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })