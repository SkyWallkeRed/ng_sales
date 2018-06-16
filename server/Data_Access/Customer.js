const dataAccess = require('../Data_Access/DataAccess').sequelize;
const baseModel = require('../Data_Access/baseModel');
const Company = require('./Company');
const Sequelize = require('sequelize');
// const baseModel = require('./baseModel');



class Customer extends baseModel {
    constructor() {
        super();
        this.model = this.initCustomer();
    }
    initCustomer() {
        let customer = dataAccess.define('customer', {
            customer_id: { type: Sequelize.INTEGER, primaryKey: true },
            FirstName: Sequelize.STRING,
            LastName: Sequelize.STRING,
            Email: Sequelize.STRING,
            Phone: Sequelize.STRING,
            company_id: Sequelize.INTEGER,
        }, {
            autoIncrement:true,
                freezeTableName: true // Model tableName will be the same as the model name
            });
        customer.belongsTo(Company.model, { foreignKey: 'company_id' });
        return customer;
    }
    // update(detailsToUpdate) {
    //     return this.model.update(
    //         { FirstName: detailsToUpdate.firstName, LastName: detailsToUpdate.lastName }, {
    //             where: { customer_id: detailsToUpdate.customer_id }
    //         }).then(() => {
    //             return this.getAll()
    //         })
    // }
    
}
const customer = new Customer();

module.exports = customer;
