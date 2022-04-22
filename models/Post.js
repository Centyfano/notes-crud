const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
	title: { type: String, required: [true, "Title is required"] },
	body: { type: String, required: [true, "Body is required"] },
});

module.exports = mongoose.model("Notes", NotesSchema);
