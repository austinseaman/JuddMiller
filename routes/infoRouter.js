const express = require("express")
const infoRouter = express.Router()
const Bio = require("../models/bioSchema")
const Merch = require("../models/merchSchema")

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
infoRouter.get('/merch', (req, res, next) => {
    Merch.find((err, merch) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(merch)
    })
})


module.exports = infoRouter