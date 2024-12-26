const CrudeRepository = require('./crud-repository')
const {Airplane} = require('../models')


class AirplaneRepository extends CrudeRepository{
    constructor(){
        super(Airplane)
    }
}


module.exports = AirplaneRepository;
