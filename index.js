const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const getEmail = require('./config')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get("/api/getEmails/:subject", getEmail)
let port = process.env.port || 1111
app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log("server app and running " + port)
})
