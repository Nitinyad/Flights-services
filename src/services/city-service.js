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


module.exports = {
    createCity
}