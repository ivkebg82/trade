const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String
    },
    image: {
        type: Buffer
    }

})

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;