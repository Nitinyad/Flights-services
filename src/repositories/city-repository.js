const CrudeRepository = require('./crud-repository')
const {City} = require('../models')


class CityRepository extends CrudeRepository{
    constructor(){
        super(City)
    }
}


module.exports = CityRepository;
