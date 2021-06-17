const mongoose = require('mongoose')

const LabelsSchema = mongoose.Schema({
	name: {
		type: String,
	},
	created: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('label', LabelsSchema)
