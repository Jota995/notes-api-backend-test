const { Sequelize } = require("sequelize")
const { DATABASE_URI } = require("./config/config")

const sequelize = new Sequelize(DATABASE_URI, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
})

module.exports = { sequelize }
