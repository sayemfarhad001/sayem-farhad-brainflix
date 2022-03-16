const fs = require("fs");
// const { uuid } = require("uuidv4");
const { v4: uuidv4 } = require('uuid');

// Re-usable function to read our data file
function readVideos(filepath) {
  const videoData = fs.readFileSync(filepath, {encoding:'utf8', flag:'r'},        
    function(err, data) {
      if(err)
          console.log(err);
      else
          console.log(data);
    });
  // console.log(videoData)
  const parsedData = JSON.parse(videoData);
  // console.log(parsedData)
  return parsedData;
}

function writeJSONFile(filepath, content) {
  fs.writeFileSync(filepath, JSON.stringify(content), "utf8", err => {
     console.log(err)
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
