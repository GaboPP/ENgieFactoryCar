const Sequelize = require('sequelize');
    const sequelize = new Sequelize('EngieFactoryCar', 'postgres', 'admin', { //nombre base de datos, usuario, contraseña
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    });

    module.exports = sequelize;