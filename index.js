const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const conn = require("./database");
require("dotenv").config({ path: ".env" });
conn();

app.use(
	cors({ credentials: true, origin: true, allowedHeaders: ["Content-Type"] }),
);

// Allow app to send json data from the database
app.use(express.json());

// mount routes to be used in the app
routes(app);

const port = process.env.PORT;
app.listen(port, () => console.log(`server listening on port ${port}`));
