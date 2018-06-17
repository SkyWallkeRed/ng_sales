class BaseModel {
    constructor() {
    }
    getAll() {
        return this.model.findAll();
    }
    delete(id) {
        return this.model.destroy({ where: { [this.PK]: id } });
    }
    newOne(obj) {
        return this.model.create(obj);
    }
    edit(whereId, detailsToUpdate) {
        return this.model.update(  detailsToUpdate, { where: { [this.PK]: whereId }  });
    }
}
// console.log(baseModel);
module.exports = BaseModel;








