const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")
const PORT = process.env.PORT || 8080
const path = require("path")
require("dotenv").config()

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect('mongodb+srv://apseaman0:Coron%4012@cluster0-k9haj.mongodb.net/JuddLuciusMiller?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true

    }, () => console.log('Connected to DB.'))

// Routes
app.use("/auth", require("./routes/authRouter"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use("/info", require("./routes/infoRouter"))
app.use("/api/bio", require("./routes/bioRouter"))
app.use(express.static(path.join(__dirname, "client", "build")))





// Err handler
app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))