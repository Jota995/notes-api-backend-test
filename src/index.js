const { app } = require("./app")
const { PORT } = require("./config/config")

const { sequelize } = require("./database")

async function main() {
  try {
    await app.listen(PORT)
    console.log(`Server is running on port ${PORT}`)
    await sequelize.sync()
  } catch (error) {
    console.error("Some error: ", error)
  }
}

main()
