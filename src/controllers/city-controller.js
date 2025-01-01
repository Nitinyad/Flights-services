const {StatusCodes } = require('http-status-codes');

const {CityService}= require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');




/***
 * POST : /cities
 * req-body {name : 'London'}
 */

async function createCity(req, res){
    console.log("inside controller")
    try {
        const city = await CityService.createCity({
            name : req.body.name,
        });
        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully create an city";
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while creating the city";
        return res.status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * DELETE : /cities/:id
 * req-body {}
 */

async function destoryCity(req,res){
    try {
        const city = await CityService.destoryCity(req.params.id)
        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully deleted an city";
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while deleting the city";
        return res.status(error.statusCode)
                .json(ErrorResponse);
    } 
}

/** 
 * PATCH : /cities/:id
 * req-body {}
 */

async function updateCity(req, res) {
    try {
        const city = await CityService.updateCity(req.params.id, {name: req.body.name});
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
  }


module.exports = {
    createCity,
    destoryCity,
    updateCity
}