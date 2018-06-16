const dataAccess = require('../Data_Access/DataAccess').sequelize;
const Sequelize = require('sequelize');
// console.log(dataAccess);
class Company {
    constructor() {
        // this.seq = dataAccess;
        this.model = this.initCompany();
    }
    initCompany() {

        let company = dataAccess.define('company', {
            company_id: { type: Sequelize.INTEGER, primaryKey: true },
            name: Sequelize.STRING,
            Adrress: Sequelize.STRING,
            Country: Sequelize.STRING,

        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
        return company;
    }
    update(detailsToUpdate) {
        return this.model.update(
            { name: detailsToUpdate.name, Adrress: detailsToUpdate.Adrress, Country: detailsToUpdate.Country }, {
                where: { company_id: detailsToUpdate.company_id }
            }).then(() => {
                return this.getAll()
            })
    }
}
const company = new Company();

module.exports = company;
