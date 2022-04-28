const { DataTypes } = require("sequelize")
const { sequelize } = require("../database")
const { Task } = require("./task")

const Proyect = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
})

Proyect.hasMany(Task, {
  foreignKey: "proyectId",
  sourceKey: "id",
})

Task.belongsTo(Proyect, {
  foreignKey: "proyectId",
  targetKey: "id",
})

module.exports = { Proyect }
