//this imports the "fs" package to write the file
const fs = require("fs");

// writes the data to a html file with a name of our choosing
const writeToFile = (html, path) => {
  try {
    fs.writeFileSync(path, html);
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeToFile;
