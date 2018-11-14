module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Autos', {
        auto: {
            type: DataTypes.BIGINT,
            primaryKey: true, // si no se declara sequelize lo hace por defecto
            autoIncrement: true
        },
        marca: {
            type: DataTypes.STRING,
        },
        modelo: {
            type: DataTypes.STRING
        },
        anno: {
            type: DataTypes.INTEGER
        }
        }, {
        tableName: 'Autos', //si la entidad esta en plural sequelize anota el nombre por defecto
        timestamps: false, //por que no declaramos "CrateAt" ni tiempos de creación en nuestro modelo, si no ... exacto, sequelize lo hac epor defecto.
        }
    );
};