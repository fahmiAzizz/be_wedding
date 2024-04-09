const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
app.use(cors())

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const wishRouter = require('./routes/wish.router')

app.use("/v1/wish", wishRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})