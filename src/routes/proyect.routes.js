const { Router } = require("express")

const {
  getProyects,
  createProyect,
  getProyect,
  updateProyect,
  deleteProyect,
  getProyectTasks,
} = require("../controllers/proyect.controller")

const router = Router()

router.get("/", getProyects)
router.get("/:id", getProyect)
router.post("/", createProyect)
router.put("/:id", updateProyect)
router.delete("/:id", deleteProyect)

router.get("/:id/tasks", getProyectTasks)

module.exports = router
