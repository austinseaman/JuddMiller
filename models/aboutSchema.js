const mongoose = require("mongoose")
const Schema = mongoose.Schema

const aboutSchema = new Schema({
    aboutText: {
        required: true,
        type: String,
    },
    dateSubmitted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("About", aboutSchema)