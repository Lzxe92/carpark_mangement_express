require("dotenv").config({silent: true});
const config = require(__dirname + '/../config/settings.js');
const env = config.env;

module.exports = {

    "development": config["development"].db,
    "test": config["test"].db,
    "production": config["production"].db,
}

