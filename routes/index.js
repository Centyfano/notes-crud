const notes = require("./notes");

module.exports = (route) => {
	route.use("/api/notes", notes);
};
