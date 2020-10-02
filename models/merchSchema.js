const mongoose = require("mongoose")
const Schema = mongoose.Schema

const merchSchema = new Schema({
    merchName: {
        required: true,
        type: String
    },
    merchImg: {
        required: true,
        type: URL
    },
    merchDesc: {
        required: true,
        type: String,
    }
})

module.exports = mongoose.model("Merch", merchSchema)