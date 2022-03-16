const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || process.argv[2] || 8080;

const cors = require('cors');
app.use(cors());

// ALLOWS POSTING FROM DATA
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SERVE PUBLIC FILES
app.use(express.static("public"));

// METHODS FOR API/VIDEOS
const videoRoutes = require("./routes/videos");
app.use("/api/videos", videoRoutes);

app.listen(PORT, () => {console.log(`listening from ${PORT}`)});