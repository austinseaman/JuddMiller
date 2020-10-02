const express = require("express")
const merchRouter = express.Router()
const Merch = require("../models/merchSchema")

//get, post, put, delete
merchRouter.get('/', (req, res, next) => {
    Merch.find((err, merch) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(merch)
    })
})

merchRouter.post('/', (req, res, next) => {
    const newProduct = new Merch(req.body)

    newProduct.save((err, newProduct) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newProduct)
    })
})

merchRouter.put("/:_id", (req, res, next) => {
    Merch.findByIdAndUpdate(
        {_id: req.params._id},
        req.body,
        { new: true },
        (err, product) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(product)
        }
    )
})

merchRouter.delete("/:_id", (req, res, next) => {
    Merch.findByIdAndRemove({ _id: req.params._id }, (err) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("Successfully removed product.")
    })
})

module.exports = merchRouter