const Sequelize = require('sequelize');
const sequelize = require('../libs/database').sequelize;
const modelName = 'Dog';

module.exports = sequelize.isDefined(modelName) ? sequelize.model(modelName) : sequelize.define(modelName, {
    name: {
        type: Sequelize.STRING
    }
})