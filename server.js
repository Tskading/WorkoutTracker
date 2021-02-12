const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("./models");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

// routes

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
