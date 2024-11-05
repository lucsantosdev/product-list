import express from "express"
import { PORT } from "./config.js"
import mongoose from "mongoose"
import { Product } from "./models/productModel.js"
import productRoute from './routes/productsRoute.js'
import cors from 'cors'

const app = express()

// middleware for parsing request body
app.use(express.json())

// middleware for handling CROS POLICY
// option 1: allow all origins with default  of cors
app.use(cors())
// option 2: allow custom origins
app.use(
    cors({
        origin: 'htpps://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)

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