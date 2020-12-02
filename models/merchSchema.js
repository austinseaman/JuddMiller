const mongoose = require("mongoose")
const Schema = mongoose.Schema

const merchSchema = new Schema({
    merchName: {
        required: true,
        type: String
    },
    merchImg: {
        required: true,
        type: String
    },
    merchDesc: {
        required: true,
        type: String,
    },
    merchPrice: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model("Merch", merchSchema)