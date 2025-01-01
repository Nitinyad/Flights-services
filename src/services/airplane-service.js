const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    console.log("inside service")
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }catch(err){
        // console.log(err);
        if(err.name == 'SequelizeValidationError'){
            let explanation = [];
            err.errors.forEach((e)=>{
                explanation.push(e.message);
            })

            // console.log(explanation);
            throw new AppError(explanation , StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplane object' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirplanes(){
    try{
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    }catch(err){
        throw new AppError("Cannot fetch data of all the airplanes" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id){
    try{
        const airplane = await airplaneRepository.get(id);
        return airplane;
    }catch(err){
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present' , err.statusCode);
        }
        throw new AppError("Cannot fetch data of all the airplanes" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destoryAirplane(id){
    try{
        const response = await airplaneRepository.destory(id);
        return response;
    }catch(err){
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present' , err.statusCode);
        }
        throw new AppError("Cannot delete data of the airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updatedAirplane(id , data){
    try {
        const res = await airplaneRepository.update(id,data);
        return res;
    } catch (error) {
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present' , err.statusCode);
        }
        throw new AppError("Cannot update data of the airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destoryAirplane,
    updatedAirplane
}