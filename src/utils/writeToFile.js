//this imports the "fs" package to write the file
const fs = require("fs");

const writeToFile = (html) => {
  try {
    fs.writeFileSync("team-profile.html", html);
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeToFile;
