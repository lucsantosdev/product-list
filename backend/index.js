import express from "express"
import { PORT } from "./config.js"
import mongoose from "mongoose"
import { Product } from "./models/productModel.js"

const app = express()

// middleware for parsing request body
app.use(express.json())

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Hello World')
})

// route (http) for save a new product
app.post('/products', async(req, res) => {
    try {
        if (
            !req.body.product ||
            !req.body.description ||
            !req.body.price
        ) {
            return res.status(400).send({
                message: 'Send all required fields: product, description, price'
            })
        }
        const newProduct = {
            product: req.body.product,
            description: req.body.description,
            price: req.body.price
        }
        const product = await Product.create(newProduct)

        return res.status(201).send(product)
        
    } catch (err) {
        console.log(err.message)
        response.status(500).send({ message: err.message })
    }
})

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