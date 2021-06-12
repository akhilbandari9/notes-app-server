const mongoose = require('mongoose')

const connectDb = async () => {
	try {
		await mongoose.connect(process.env.DB_ATLAS, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		})
		console.log('Connected to MongoDb')
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
}

module.exports = connectDb
