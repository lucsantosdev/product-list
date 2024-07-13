import express from "express"
import { PORT } from "./config.js"
import mongoose from "mongoose"

const app = express()

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Hello World')
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