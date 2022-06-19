const tasks = require("./routes/wordController");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();

connection();

app.use(express.json());
app.use(cors());

app.use("/words", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));