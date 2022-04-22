const router = require("express").Router();
const {
	getNotes,
	getNote,
	createNote,
	updateNote,
	deleteNote,
} = require("../controllers/notes");

router.route("/").get(getNotes).post(createNote); // routes that require root
router.route("/:id").get(getNote).put(updateNote).delete(deleteNote); // routes that need id as the param

module.exports = router;
