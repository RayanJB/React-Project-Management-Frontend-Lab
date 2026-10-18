const mongoose = require('mongoose')

// Schema
const productSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    description: {
        type: String,

        maxLength: 500
    },
    category: {
        type: String,
        enum: ["electronics", "food", "clothing", "furniture", "other"],
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0.1
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }


},

    { timestamps: true })

// model
const prouduct = mongoose.model('product', productSchema)


module.exports = prouduct