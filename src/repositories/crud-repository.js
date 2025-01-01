const {Logger} = require('../config')

class CrudeRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        const res = await this.model.create(data);
        return res;
    }

    async destory(data){
        const res = await this.model.destory({
            where : {
                id : data
            }
        });
        return res;
    }

    async get(data){

        const res = await this.model.findByPk(data);
        return res;

    }

    async getAll(){
        const res = await this.model.findAll();
        return res;
    }

    async update(data){// here data is object {} -> {col : val , ....}
        const res = await this.model.update(data , {
            where  : {
                id : id 
            }
        });
        return res;
    }
}


module.exports = CrudeRepository;