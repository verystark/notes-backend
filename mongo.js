const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://tuomaspaloheimo05_db_user:${password}@cluster0.qbt4kuu.mongodb.net/testNoteApp?appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Jonathan Toes',
  important: true,
})

note.save().then(() => {
  console.log('note saved')
  mongoose.connection.close()
})