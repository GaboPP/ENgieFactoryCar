
const sequelize = require('../server/sequelize');
const Autos = sequelize.import('Autos', require("../modelos/Autos"));
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Usuarios', {
        Rut: {
            type: DataTypes.INTEGER,
            primaryKey: true, // si no se declara sequelize lo hace por defecto
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING,
        },
        Auto: {
            type: DataTypes.BIGINT,
            references: {
                // This is a reference to another model
                model: Autos,

                // This is the column name of the referenced model
                key: 'id',
            }
        }
        }, {
        tableName: 'Usuarios', //si la entidad esta en plural sequelize anota el nombre por defecto
        timestamps: false, //por que no declaramos "CrateAt" ni tiempos de creación en nuestro modelo, si no ... exacto, sequelize lo hac epor defecto.
        }
    );
};