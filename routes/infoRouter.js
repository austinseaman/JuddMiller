const express = require("express")
const infoRouter = express.Router()
const Bio = require("../models/bioSchema")

// Unprotected route to get all info

// Bio
infoRouter.get('/bio', (req, res, next) => {
    Bio.find((err, bio) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bio)
    })
})

// Merch


module.exports = infoRouter