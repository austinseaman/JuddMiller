const express = require("express")
const bioRouter = express.Router()
const Bio = require("../models/bioSchema")

//get, post, put, delete
bioRouter.get('/', (req, res, next) => {
    Bio.find((err, bio) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bio)
    })
})

bioRouter.post('/', (req, res, next) => {
    const newBio = new Bio(req.body)

    newBio.save((err, newBio) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newBio)
    })
})

bioRouter.put("/:_id", (req, res, next) => {
    Bio.findByIdAndUpdate(
        {_id: req.params._id},
        req.body,
        { new: true },
        (err, bio) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(bio)
        }
    )
})

bioRouter.delete("/:_id", (req, res, next) => {
    Bio.findByIdAndRemove({ _id: req.params._id }, (err) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("successfully deleted")
    })
})

module.exports = bioRouter