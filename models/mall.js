'use strict';
module.exports = (sequelize, DataTypes) => {
    const Mall = sequelize.define('Mall', {
        mall_id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        postal_code: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 999999
            }
        }
    }, {tableName: "mall"});
    Mall.associate = function (models) {
        Mall.hasMany(models.ParkingLot, {
            onDelete: 'cascade',
            foreignKey: 'mall_id',
            as: 'parking_lots',
        });
    };
    return Mall;
};