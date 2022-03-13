const fs = require("fs");
// const { uuid } = require("uuidv4");
const { v4: uuidv4 } = require('uuid');

// Re-usable function to read our data file
function readVideos(filename) {
  const videoData = fs.readFileSync(filename, "utf8");
  // console.log(videoData)
  const parsedData = JSON.parse(videoData);
  console.log(parsedData)
  return parsedData;



}

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
    }
  });
}

const getNewId = () => {
  return uuidv4();
};

const timestamp = () => {
  return Date.now();
};

module.exports = {
  readVideos,
  writeJSONFile,
  getNewId,
  timestamp
};
