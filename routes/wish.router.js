const express = require("express")
const router = express.Router()

const wishController = require("../controller/wish.controller")

router.get("/v1/wish", wishController.getAll)
router.post("/", wishController.create)


module.exports = router