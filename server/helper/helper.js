const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// FUNCTION TO WRITE DATA
function writeJSONFile(filepath, content) {
  fs.writeFileSync(filepath, JSON.stringify(content), "utf8", err => {
     console.log(err)
  });
}

// FUNCTION TO GENERATE NEW ID
const getNewId = () => {
  return uuidv4();
};

// FUNCTION TO GENERATE TIMESTAMP
const timestamp = () => {
  return Date.now();
};

module.exports = {
  writeJSONFile,
  getNewId,
  timestamp
};
