const express = require('express')
const router = express.Router()
const { Note, Bin } = require('../models/Note')

router.get('/', async (_, res) => {
	try {
		const binNotes = await Bin.find({}).sort({ created: -1 })
		res.json(binNotes)
	} catch (err) {
		console.log(err)
		res.status(500).send('Server Error')
	}
})
router.delete('/p/:id', async (req, res) => {
	try {
		const { id } = req.params

		const binNote = await Bin.findById(id)
		if (!binNote) {
			res.status(404).json({ msg: 'Note Not Found' })
		} else {
			await Bin.findByIdAndRemove(id)

			res.json({ msg: 'Note Deleted Permanently' })
		}
	} catch (err) {
		console.error(err)
		res.status(500).send('Server Error')
	}
})

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params

		const note = await Bin.findById(id)
		const { body, title, updated, created } = note
		if (!note) {
			res.status(404).json({ msg: 'Note Not Found' })
		} else {
			const newNote = new Note({ body, title, updated, created })
			await newNote.save()
			await Bin.findByIdAndRemove(id)

			res.json({ msg: 'Note Restored' })
		}
	} catch (err) {
		console.error(err)
		res.status(500).send('Server Error')
	}
})

router.delete('/delete/all', async (_, res) => {
	try {
		await Bin.deleteMany({})
		res.json({ msg: 'All Bin Notes Deleted' })
	} catch (err) {
		console.log(err)
		res.status(500).send('Server Error')
	}
})

module.exports = router
