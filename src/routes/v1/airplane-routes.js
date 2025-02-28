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


// /api/v1/airplanes/:id DELETE
router.delete('/:id' , airplaneController.destoryAirplane);

// /api/v1/airplanes/:id PATCH
router.patch('/:id' , airplaneController.updateAirplane);

module.exports = router