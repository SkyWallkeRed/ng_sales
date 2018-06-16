const dataAccess = require('../Data_Access/DataAccess').sequelize;
const Sequelize = require('sequelize');
const Customer = require('./Customer');
class Comments {
    constructor() {
        this.model = this.initComments();
    }
    initComments() {
        let comments = dataAccess.define('Comments', {
            comments_id: { type: Sequelize.INTEGER, primaryKey: true },
            name: Sequelize.STRING,
            date: Sequelize.DATE,
            text: Sequelize.STRING,

        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
        comments.hasOne(Customer.model, { foreignKey: 'customer_id' });
        return comments;
    }
    update(detailsToUpdate) {
        return this.model.update(
            { text: detailsToUpdate.text, date: detailsToUpdate.date }, {
                where: { comments_id: detailsToUpdate.id }
            }).then(() => {
                return this.getAll()
            })
    }
}
const comments = new Comments();

module.exports = comments;
