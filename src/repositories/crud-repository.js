const {Logger} = require('../config')

class CrudeRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        // console.log("inside the repo")
        // try {
            const res = await this.model.create(data);
            return res;
        // } catch (error) {
        //     Logger.error("Something went wrong in the crud repo : create");
        //     throw error;
        // }
        // const res = await this.model.create(data);
        // return res;
    }

    async destory(data){
        try {
            const res = await this.model.destory({
                where : {
                    id : data
                }
            });
            return res;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo : destory");
            throw error;
        }
    }

    async get(data){
        try {
            const res = await this.model.findByPk(data);
            return res;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo : get");
            throw error;
        }
    }

    async getAll(){
        try {
            const res = await this.model.findAll();
            return res;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo : getall");
            throw error;
        }
    }

    async update(data){// here data is object {} -> {col : val , ....}
        try {
            const res = await this.model.update(data , {
                where  : {
                    id : id 
                }
            });
            return res;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo : update");
            throw error;
        }
    }
}


module.exports = CrudeRepository;