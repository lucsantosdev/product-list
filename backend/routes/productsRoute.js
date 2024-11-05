import express from 'express'
import { Product } from '../models/productModel.js'

const router = express.Router()

// route (http) for save a new product
router.post('/', async(req, res) => {
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
router.get('/', async (req, res) => {
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
router.get('/:id', async (req, res) => {
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
router.put('/:id', async(req, res) => {
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
router.delete('/:id', async(req, res) => {
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

export default router