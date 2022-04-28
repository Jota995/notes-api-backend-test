const { config } = require("dotenv")
config()

module.exports = {
  PORT: process.env.PORT || 5000,
  DATABASE_URI: process.env.HEROKU_POSTGRES_URI || "",
  API_VERSION: process.env.API_VERSION || "1.0",
}
