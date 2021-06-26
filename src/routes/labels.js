const express = require('express')
const router = express.Router()
const Label = require('../models/Label')

router.get('/', async (_, res) => {
	try {
		const labels = await Label.find({}).sort({ created: 1 })
		res.json(labels)
	} catch (err) {
		console.log(err)
		res.status(500).send('Server Error')
	}
})

router.post('/', async (req, res) => {
	try {
		const { label } = req.body

		if (label === '') {
			res.send('Label cannot be blank')
		}

		const newLabel = new Label({
			label,
		})

		const createdLabel = await newLabel.save()

		res.json(createdLabel)
	} catch (err) {
		console.error(err)
		res.status(500).send('Server Error')
	}
})

router.delete('/:label', async (req, res) => {
	try {
		const labelRes = await Label.find({ label: req.params.label })
		if (labelRes.length <= 0) {
			res.status(404).json({ msg: 'Label Not Found' })
		} else {
			const id = labelRes[0]._id

			await Label.findByIdAndDelete(id)

			res.json({ msg: 'Label Deleted' })
		}
	} catch (err) {
		console.error(err)
		res.status(500).send('Server Error')
	}
})

module.exports = router
