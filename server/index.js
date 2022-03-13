const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || process.argv[2] || 8080;

// cross origin resource sharing
const cors = require('cors');
app.use(cors());

// express.urlencoded allows posting form data
app.use(express.urlencoded({ extended: true }));

// in order to access req.body you need to use express.json() middleware
app.use(express.json());

// serve public files e.g. index.html
app.use(express.static("public"));

// get, post, put methods for /api/videos
const videoRoutes = require("./routes/videos");
app.use("/api/videos", videoRoutes);

// start the server and listen on port 8080
app.listen(PORT, () => {console.log(`listening from ${PORT}`)});