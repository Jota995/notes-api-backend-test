const express = require("express")
const cors = require("cors")
const { API_VERSION } = require("./config/config")

const proyectRoutes = require("./routes/proyect.routes")
const tasksRoutes = require("./routes/task.routes")
const { errorHandler } = require("./middlewares/error")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(`/api/${API_VERSION}/proyects`, proyectRoutes)
app.use(`/api/${API_VERSION}/tasks`, tasksRoutes)

app.use(errorHandler)

module.exports = { app }
