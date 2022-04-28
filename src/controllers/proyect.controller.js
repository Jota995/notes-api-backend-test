const { Proyect } = require("../models/project")
const { Task } = require("../models/task")

const getProyects = async (req, res, next) => {
  try {
    const proyects = await Proyect.findAll()
    return res.json({
      succes: true,
      data: proyects,
    })
  } catch (error) {
    next(error.message)
  }
}

const getProyect = async (req, res, next) => {
  try {
    const { id } = req.params
    const proyect = await Proyect.findByPk(id)

    if (!proyect) return res.status(404).json({ succes: false, data: [] })
    res.json({
      succes: true,
      data: proyect,
    })
  } catch (error) {
    next(error.message)
  }
}

const createProyect = async (req, res, next) => {
  try {
    const { name, priority, description } = req.body

    const newProyect = await Proyect.create({
      name,
      priority,
      description,
    })

    return res.json(newProyect)
  } catch (error) {
    next(error.message)
  }
}

const updateProyect = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, priority, description } = req.body
    const proyect = await Proyect.findByPk(id)
    proyect.name = name
    proyect.priority = priority
    proyect.description = description
    await proyect.save()
    res.json({
      succes: true,
      data: proyect,
    })
  } catch (error) {
    next(error.message)
  }
}

const deleteProyect = async (req, res, next) => {
  try {
    const { id } = req.params
    await Proyect.destroy({
      where: {
        id,
      },
    })
    res.status(204).json({
      succes: true,
    })
  } catch (error) {
    next(error.message)
  }
}

const getProyectTasks = async (req, res, next) => {
  try {
    const { id } = req.params
    const tasks = await Task.findAll({
      where: {
        proyectId: id,
      },
    })

    if (!tasks) return res.status(404).json({ succes: false, data: [] })

    return res.json({
      succes: true,
      data: tasks,
    })
  } catch (error) {
    next(error.message)
  }
}

module.exports = {
  getProyects,
  getProyect,
  createProyect,
  updateProyect,
  deleteProyect,
  getProyectTasks,
}
