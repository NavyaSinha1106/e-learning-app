const mongoose = require("mongoose");
const url = "mongodb+srv://Navya:Nav1106@cluster0.klw3b.mongodb.net/?retryWrites=true&w=majority";

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(url, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};