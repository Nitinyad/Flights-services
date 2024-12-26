const express = require("express");
const airplaneRoutes = require('./airplane-routes');
const {infoController} = require('../../controllers')
const router = express.Router();

router.get("/info" , infoController.info);
console.log("inside the v1")
router.use('/airplanes' , airplaneRoutes);
console.log("/airplanes route got registered")



module.exports = router

