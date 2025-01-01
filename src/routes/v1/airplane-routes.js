const express = require("express");
const {AirplaneController, airplaneController} = require('../../controllers');
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

//  /api/v1/airplanes POST

console.log("inside the /airplane")
router.post('/', AirplaneMiddlewares.validateCreateRequest , airplaneController.createAirplane );


// /api/v1/airplanes GET
router.get('/' , airplaneController.getAirplanes);


// /api/v1/airplanes/:id GET
router.get('/:id' , airplaneController.getAirplane);


module.exports = router