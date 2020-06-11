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
        // associations can be defined here
    };
    return Car;
};