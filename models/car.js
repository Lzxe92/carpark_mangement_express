'use strict';
module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        car_id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        carplate_number: {
            type: DataTypes.STRING,
            unique: true
        },
    }, {tableName: "car"});
    Car.associate = function (models) {
        Car.hasMany(models.Reservation, {
            onDelete: 'cascade',
            foreignKey: 'car_id',
            as: 'reservations',
        });
    };
    return Car;
};