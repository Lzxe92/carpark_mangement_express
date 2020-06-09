require("dotenv").config({silent: true});
const config = require(__dirname + '/../config/settings.js');
const env = config.env;

module.exports = {

    "development": config["development"].db,
    "test": config["preproduction"].db,
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    }
}

