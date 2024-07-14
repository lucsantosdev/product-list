import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        product: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },
    // timesstamps for monitoring and recording of the date and time that product was listed
    {
        timestamps: true,
    }
)

export const Product = mongoose.model('Product', productSchema)