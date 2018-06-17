const dataAccess = require('../Data_Access/DataAccess').sequelize;
const Sequelize = require('sequelize');
const baseModel = require('../Data_Access/baseModel');
class Company extends baseModel {
    constructor() {
        super();
        this.PK = "company_id";
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
}
const company = new Company();
module.exports = company;
