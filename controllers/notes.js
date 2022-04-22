const Post = require("../models/Post");

/**
 * View all notes
 * @method GET
 * @route /api/notes
 */
exports.getNotes = async (req, res) => {
	try {
		const notes = await Post.find();

		// no notes found in the database
		if (!notes)
			return res
				.status(404)
				.json({ msg: "No notes found at the moment" });

		res.status(200).json({
			success: true,
			len: notes.length,
			notes,
		});
	} catch (error) {
		console.error(error);
	}
};

/**
 * View a single note by ID
 * @method GET
 * @route /api/notes/`:id`
 */
exports.getNote = async (req, res) => {
	try {
		const id = req.params.id;
		const note = await Post.findById(id);

		// If no notes found in the database with the supplied id
		if (!note)
			return res
				.status(404)
				.json({ msg: `No notes found with id ${id}` });

		res.status(200).json({
			success: true,
			note,
		});
	} catch (error) {
		console.error(error);
	}
};

/**
 * Create a note
 * @method POST
 * @route /api/notes
 */
exports.createNote = async (req, res) => {
	try {
		const { title, body } = req.body;

		// check that both title and body are required
		if (!title || !body)
			return res.status(400).json({
				success: false,
				msg: "Please fill all the required fields",
			});

		const note = await Post.create(req.body);

		res.status(201).json({
			success: true,
			msg: "note created",
			note,
		});
	} catch (error) {
		console.error(error);
	}
};

/**
 * Create a note
 * @method PUT
 * @route /api/notes/`:id`
 */
exports.updateNote = async (req, res) => {
	try {
		const { title, body } = req.body;
		const id = req.params.id;

		// check that both title and body are required
		if (!title || !body)
			return res.status(400).json({
				success: false,
				msg: "Please fill all the required fields",
			});

		const note = await Post.findByIdAndUpdate(id, req.body, { new: true });

		res.status(201).json({
			success: true,
			msg: "note updated",
			note,
		});
	} catch (error) {
		console.error(error);
	}
};

/**
 * Delete a note
 * @method DELETE
 * @route /api/notes/`:id`
 */
exports.deleteNote = async (req, res) => {
	try {
		const id = req.params.id;

		await Post.findByIdAndDelete(id);

		res.status(200).json({
			success: true,
			msg: "note deleted",
		});
	} catch (error) {
		console.error(error);
	}
};
