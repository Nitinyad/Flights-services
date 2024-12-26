const {AirplaneRepository} = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    console.log("inside service")
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }catch(err){
        throw err;
    }
}


module.exports = {
    createAirplane
}