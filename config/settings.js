require("dotenv").config({ silent: true });
const config = require(__dirname + '/../config/settings.js');

module.exports = {
    port: process.env.PORT || 8080,
    env: process.env.NODE_ENV || "development",

    development: {
        db: {
            "username": "root",
            "password": null,
            "database": "carpark_management_development",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "operatorsAliases": false,
            "dialect": "mysql",
        }
    },
    preproduction: {
        db: {
            "username": "root",
            "password": null,
            "database": "carpark_management_preproduction",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "operatorsAliases": false,
            "dialect": "mysql",
        }
    },
    production: {
        db: {
            "username": "root",
            "password": null,
            "database": "carpark_management_production",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "operatorsAliases": false,
            "dialect": "mysql",
        }
    },
};
