const express = require("express");
const {AirplaneController, airplaneController} = require('../../controllers')
const router = express.Router();

//  /api/v1/airplanes POST
console.log("inside the /airplane")
router.post('/' , airplaneController.createAirplane );


module.exports = router