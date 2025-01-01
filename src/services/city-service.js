const { StatusCodes } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data) {
    try{
        const city = await cityRepository.create(data);
        return city;
    }catch(err){
        // console.log(err);
        if(err.name == 'SequelizeValidationError' || err.name == 'SequelizeUniqueConstraintError'){
            let explanation = [];
            err.errors.forEach((e)=>{
                explanation.push(e.message);
            })

            // console.log(explanation);
            throw new AppError(explanation , StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new City object' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function destoryCity(id){
    try {
        const city = await cityRepository.destory(id);
        return city;
    } catch (err) {
        if(err.name == 'SequelizeValidationError' || err.name == 'SequelizeUniqueConstraintError'){
            let explanation = [];
            err.errors.forEach((e)=>{
                explanation.push(e.message);
            })

            // console.log(explanation);
            throw new AppError(explanation , StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new City object' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id, data) {
    try {
      const response = await cityRepository.update(id, data);
      return response;
    } catch (error) {
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new AppError(
          "The city you requested to update is not present",
          error.statusCode
        );
      }
      throw new AppError(
        "Unable to update the data",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

module.exports = {
    createCity,
    destoryCity,
    updateCity
}