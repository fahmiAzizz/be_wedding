const express = require("express")
const router = express.Router()

const wishController = require("../controller/wish.controller.js")

router.get("/", wishController.getAll)
router.post("/", wishController.create)


module.exports = router