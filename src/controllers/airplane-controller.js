const {StatusCodes } = require('http-status-codes');

const {AirplaneService}= require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


/***
 * POST : /airplanes
 * req-body {modelNumber : 'airbus320' , capacity : 200}
 */

async function createAirplane(req, res){
    console.log("inside controller")
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully create an airplane";
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while creating the airplane";
        return res.status(error.statusCode)
                .json(ErrorResponse);
    }
}

/***
 * GET : /airplanes
 * req-body {}
 */

async function getAirplanes(req,res){
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while getting all airplane";
        return res.status(error.statusCode)
                .json(ErrorResponse);
    }
}

/***
 * GET : /airplanes/:id
 * req-body {}
 */
async function getAirplane(req,res){
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data  = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while getting the airplane";
        return res.status(error.statusCode)
                .json(ErrorResponse);
    }
}


/***
 * DELETE : /airplanes/:id
 * req-body {}
 */
async function destoryAirplane(req,res){
    try {
        
        const airplane = await AirplaneService.destoryAirplane(req.params.id);
        SuccessResponse.data  = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while deleting the airplane";
        return res.status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destoryAirplane
}