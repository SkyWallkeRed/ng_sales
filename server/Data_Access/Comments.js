const dataAccess = require('../Data_Access/DataAccess').sequelize;
const Sequelize = require('sequelize');
const Customer = require('./Customer');
const baseModel = require('../Data_Access/baseModel');

class Comments extends baseModel {
    constructor() {
        super();
        this.model = this.initComments();
    }
    initComments() {
        let comments = dataAccess.define('Comments', {
            comment_id: { type: Sequelize.INTEGER, primaryKey: true },
            date: Sequelize.DATE,
            text: Sequelize.STRING,
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
        comments.hasOne(Customer.model, { foreignKey: 'customer_id' });
        return comments;
    }
}
const comments = new Comments();
module.exports = comments;
