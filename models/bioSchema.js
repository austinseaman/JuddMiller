const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bioSchema = new Schema({
    bioText: {
        required: true,
        type: String,
    },
    dateSubmitted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Bio", bioSchema)