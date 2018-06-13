const dataAccess = require('../Data_Access/DataAccess').sequelize;
const { Company } = require('./Company');
const Sequelize = require('sequelize');

class Customer {
    constructor() {
        this.Customer = this.initCustomer();

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
                freezeTableName: true // Model tableName will be the same as the model name
            });
        customer.belongsTo(Company, { foreignKey: 'company_id' });
        return customer;
    }
}
const customer = new Customer();

module.exports = customer;
// const customer_table = sequelize.define('customer', {
//     customer_id: { type: Sequelize.INTEGER, primaryKey: true },
//     FirstName: Sequelize.STRING,
//     LastName: Sequelize.STRING,
//     Email: Sequelize.STRING,
//     Phone: Sequelize.STRING,
//     Company_Id: Sequelize.INTEGER

// }, {
//         freezeTableName: true // Model tableName will be the same as the model name
//     });
// Employee.belongsTo(Department, { foreignKey: 'department_id' });
// Salaries.hasMany(Employee, { foreignKey: 'employee_id' });
// Employee.hasOne(Jobs, { foreignKey: 'job_id' })
