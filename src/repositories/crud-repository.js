const { StatusCodes } = require('http-status-codes');
const {Logger} = require('../config');
const AppError = require('../utils/errors/app-error');

class CrudeRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        const res = await this.model.create(data);
        return res;
    }

    async destory(data){
        const res = await this.model.destroy({
            where : {
                id : data
            }
        });
        if(!res){
            throw new AppError('Not able to find the resource' , StatusCodes.NOT_FOUND)
        }
        return res;
    }

    async get(data){

        const res = await this.model.findByPk(data);
        if(!res){
            throw new AppError('Not able to find the resource' , StatusCodes.NOT_FOUND)
        }
        return res;

    }

    async getAll(){
        const res = await this.model.findAll();
        return res;
    }

    async update(id , data){// here data is object {} -> {col : val , ....}
        const response = await this.model.update(data, {
            where: {
              id: id,
            },
          });
          if(response[0] == 0) {
            throw new AppError("Not able to find the resource", StatusCodes.NOT_FOUND);
        }
          return response;
    }
}


module.exports = CrudeRepository;