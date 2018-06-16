// import { SaleService } from 'src/app/services/sale.service';


// export default
class BaseModel {
    constructor() {

    }

    getAll() {
        return this.model.findAll();
    }


    // update(detailsToUpdate)

    delete(id) {
        return this.model.destroy({ where: { customer_id: id } }).then(data => {
            // return data;
        });
    }
    newOne(obj) {
        return this.model.create(obj);
    }
    edit(obj) {
        return this.model.update(obj)
    }
}
// console.log(baseModel);
module.exports = BaseModel;






