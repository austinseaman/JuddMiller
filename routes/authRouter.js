const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')


authRouter.post('/signup', (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        if (user) {
            res.status(400)
            return next(new Error("That username is already taken. :/"))
        }

        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }

            const token = jwt.sign({ user: savedUser.withoutPassword() }, process.env.SECRET)

            return res.status(201).send({ user: savedUser.withoutPassword(), token })
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        if (!user) {
            res.status(400)
            return next(new Error("The username or password does not match our records!"))
        }

        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            if (!isMatch) {
                res.status(401)
                return next(new Error("The username or password does not match our recods!"))
            }

            // creates the token
            const token = jwt.sign({ user: user.withoutPassword() }, process.env.SECRET)
            // send response with user and token
            return res.status(200).send({ user: user.withoutPassword(), token })
        })

        //     res.status(401)
        //     return next(new Error("The username or password does not match our records!"))
        // }
    })
})


module.exports = authRouter