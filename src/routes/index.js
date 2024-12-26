const express = require("express")
const v1Routes = require("./v1")

const router = express.Router();

console.log("inside the routes")
router.use("/v1" , v1Routes);
console.log("/v1 route get registered")

module.exports = router