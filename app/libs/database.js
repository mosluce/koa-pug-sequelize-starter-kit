const Sequelize = require('sequelize');
const config = require('../configs/database');

var sequelize;

if (config.uri) {
    sequelize = new Sequelize(config.uri, config.opt || {});
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config.opt || {});
}

module.exports.sequelize = sequelize;
module.exports.sync = async (ctx, next) => {
    await sequelize.sync();
    await next();
}