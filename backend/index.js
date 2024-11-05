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

// route (http) for get all products from database
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({})
        // return res.status(200).json(products) -> for "standard" list
        return res.status(200).json({
            count: products.length,
            data: products
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).send({ message: err.message })
    }
})

// route (http) for get one product from database by id
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        return res.status(200).json(product)
    } catch (err) {
        console.log(err.message)
        res.status(500).send({ message: err.message })
    }
})

// route for update a product
app.put('/products/:id', async(req, res) => {
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

        const { id } = req.params

        const result = await Product.findByIdAndUpdate(id, req.body)

        if (!result) {
            return res.status(400).json({ message: 'Product not found' })
        }

        return res.status(200).send({ message: 'Product updated succesfully' })

    } catch (err) {
        console.log(err.message)
        res.status(500).send({ message: err.message })
    }
})

// route for delete a product
app.delete('/products/:id', async(req, res) => {
    try {
        const { id } = req.params

        const result = await Product.findByIdAndDelete(id)

        if (!result) {
            return res.status(400).json({ message: 'Product not found' })
        }

        return res.status(200).send({ message: 'Product deleted succesfully' })

    } catch (err) {
        console.log(err.message)
        res.status(500).send({ message: err.message })
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