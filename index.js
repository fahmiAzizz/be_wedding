const express = require("express")
const app = express()
const bodyParser = require('body-parser')
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());


require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const wishRouter = require('./routes/wish.router')

app.use("/", wishRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})