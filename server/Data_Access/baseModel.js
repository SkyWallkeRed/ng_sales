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
        return this.model.destroy({ where: { customer_id: id } });
    }
    newOne(obj) {
        return this.model.create(obj);
    }
    // edit(obj) {
    //     return this.model.update()
    // }
    edit(whereId, detailsToUpdate) {
        return this.model.update(
            {
                FirstName: detailsToUpdate.firstName,
                LastName: detailsToUpdate.lastName,
                Email: detailsToUpdate.Email,
                Phone: detailsToUpdate.Phone,
                Company_id: detailsToUpdate.Company_id

            }, {
                where: { customer_id: whereId }
            });
    }
}
// console.log(baseModel);
module.exports = BaseModel;








