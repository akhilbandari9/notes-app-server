const mongoose = require('mongoose')

const Label = mongoose.Schema({
	label: {
		type: String,
	},
	created: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('label', Label)
