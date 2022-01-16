const express = require("express")
const cors = require("cors")

let notes = [
  {
    id: 1,
    content: "Me tengo que suscribir a @midudev en YouTube",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Tengo que estudiar las clases del FullStack Bootcamp",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "Repasar los retos de JS de midudev",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
]

const app = express()

const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get("/api/notes", (req, res) => {
  res.json(notes)
})

app.get("/api/notes/:id", (req, res) => {
  const { id } = req.params
  const note = notes.find((note) => note.id == id)
  res.json(note)
})

app.post("/api/notes", (req, res) => {
  const { content, date, important, id } = req.body

  const newNote = {
    id,
    content,
    date,
    important,
  }

  notes = { ...newNote, notes }

  return res.status(201).json(newNote)
})

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`)
})
