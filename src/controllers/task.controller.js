const { Task } = require("../models/task")

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll()
    res.json({
      success: true,
      data: tasks,
    })
  } catch (error) {
    next(error.messsage)
  }
}

const getTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const task = await Task.findByPk(id)
    if (!task) return res.status(404).json({ success: false, data: [] })
    return res.json(200).json({
      success: true,
      data: task,
    })
  } catch (error) {
    next(error.messsage)
  }
}

const createTask = async (req, res, next) => {
  try {
    const { name, proyectId } = req.body
    const newTask = await Task.create({
      name,
      proyectId,
    })
    res.status(201).json({
      success: true,
      data: newTask,
    })
  } catch (error) {
    next(error.messsage)
  }
}

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, done } = req.body
    const task = await Task.findByPk(id)
    task.set({
      name,
      done,
    })
    await task.save
    return res.json({
      success: true,
      data: task,
    })
  } catch (error) {
    next(error.messsage)
  }
}

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await Task.destroy({
      where: { id },
    })
    if (!result) return res.status(404).json({ success: false, data: [] })
    res.json({
      success: true,
      data: result,
    })
  } catch (error) {
    next(error.messsage)
  }
}

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
}
