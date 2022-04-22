const mongoose = require("mongoose");
const conn = async () => {
	try {
		const db = await mongoose.connect(process.env.DATABASE_URI);
		console.log(`database connected: ${db.connection.host}`);
	} catch (error) {
		console.error("Database connection error:", error);
	}
};

module.exports = conn;
