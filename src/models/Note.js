const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
	title: {
		type: String,
	},
	body: {
		type: String,
	},
	created: {
		type: Date,
		default: Date.now,
	},
	updated: {
		type: Date,
		default: Date.now,
	},
})

const Note = mongoose.model('note', NoteSchema)
const Bin = mongoose.model('bin', NoteSchema)
module.exports = { Note, Bin }
