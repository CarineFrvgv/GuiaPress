const Sequelize = require('sequelize');
const connection = new Sequelize('guiapress', 'root', '11111111', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;